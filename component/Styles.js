import { StatusBar, StyleSheet } from 'react-native';

export const STYLE = StyleSheet.create({
  nav: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
  navText: {
    fontSize: 30,
    paddingTop: 30,
    color: "#F2F2F2",
  },
  status: {
    backgroundColor: "#F2F2F2",
  },
  container: {
    flex: 1,
  },
  processStatus: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10,
  },
  inputContainer: {
    flex :1,
  },
  todoContainer: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 7,
  },
  processText: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10,
    color: "#F2F2F2",
  }
});

export const BACKGROUND_COLOR = {
  start: {
    color:'#7F7FD5'
  },
  middle: {
    color:'#86A8E7'
  },
  end: {
    color:'#91EAE4'
  }
}

export const TODO_CONTAINER = {
  item: {
    alignItems:'center',
    flexDirection:'row',
    backgroundColor: '#F2F2F2',
    padding: 20,
    marginHorizontal: 20,
    marginBottom:10,
    borderRadius:30,
  },
  content: {
    marginLeft:15,
    fontSize: 17,
  },
}