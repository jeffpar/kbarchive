---
layout: page
title: "Q140337: PC MAPI: Sample C++ Code to Read Mail Messages"
permalink: /kb/140/Q140337/
---

## Q140337: PC MAPI: Sample C++ Code to Read Mail Messages

{% raw %}

	Article: Q140337
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The simple Messaging Application Programming Interface (MAPI) includes a
	function that allows developers to access a user's mail messages
	programmatically. The following code illustrates one way that this can be done
	using Microsoft Visual C++ version 1.5 or another C compiler.
	
	MORE INFORMATION
	================
	
	NOTE: The following code implements MAPI.DLL as a static library.
	
	  /* readmail.c  */ 
	
	  #include <stdio.h>
	  #include <stdlib.h>
	  #include <windows.h>
	  #include <mapi.h>
	  #include <string.h>
	
	  int readmail();
	
	  long err;
	  LHANDLE lhSession;
	  lpMapiMessage FAR *lppMessage;
	  lpMapiMessage lpMessage;
	  char szSeedMessageID[512];
	  char szMessageID[512];
	  char szTmp[4096];
	  char szTmp2[50];
	
	  LPSTR lpszSeedMessageID=&szSeedMessageID[0];
	  LPSTR lpszMessageID=&szMessageID[0];
	
	  int main()
	  {
	   readmail();
	   return(0);
	  }
	
	  int readmail()
	  {
	
	    /************  Logon  **********************/ 
	    err = MAPILogon(0L, "", "", MAPI_LOGON_UI, 0L,
	    &lhSession);
	    if(err != SUCCESS_SUCCESS)
	    {
	       MessageBox(0, "Error logging on", "Error", MB_OK);
	       return(0);
	    }
	
	   /********* Find Messages ********************/ 
	   *lpszSeedMessageID = '\0';
	
	    // reset MAPIFindNext back to the top again
	    err = MAPIFindNext(lhSession, 0L, "IPM.Microsoft Mail.Note",
	    lpszSeedMessageID, 0L, 0L, lpszMessageID);
	       if(err != SUCCESS_SUCCESS)
	      {
	        MessageBox(0, "Error finding first message", "Error",
	        MB_OK);
	        err = MAPILogoff(lhSession, 0L, 0L, 0L);
	        return(0);
	
	      }
	
	    do
	    {
	      lppMessage=(lpMapiMessage FAR *) &lpMessage;
	      /******** Read Message *************/ 
	      err = MAPIReadMail(lhSession, 0L, lpszMessageID,
	      MAPI_PEEK, 0L, lppMessage);
	      if(err != SUCCESS_SUCCESS)
	      {
	        MessageBox(0, "Error during message read", "Error",
	        MB_OK);
	        err = MAPILogoff(lhSession, 0L, 0L, 0L);
	        return(0);
	      }
	        /******* copy Subject and NoteText into string *************/ 
	        if((lpMessage->lpszSubject) != NULL){
	          _fstrcpy(szTmp2, lpMessage->lpszSubject);     //  Check for NULL
	   strings
	        }
	        else _fstrcpy(szTmp2,"No subject text");
	        if((lpMessage->lpszNoteText) != NULL){
	          if(_fstrlen(lpMessage->lpszNoteText)>4096){   // Check for large
	   message body
	            MessageBox(0, "Message body to large", "MAPI2.C", MB_OK);
	          }
	         _fstrcpy(szTmp, lpMessage->lpszNoteText);
	        }
	        else _fstrcpy(szTmp, "No message body");
	        printf("\nSUBJECT: %s\n", szTmp2);
	        printf("\nNOTETEXT: \n%s\n", szTmp);
	        /****** free memory used by MAPI *********************/ 
	        err = MAPIFreeBuffer(lpMessage);
	        if(err != SUCCESS_SUCCESS)
	        {
	          MessageBox(0, "Error freeing memory", "Error",MB_OK);
	        }
	      //get next message ID.
	      lstrcpy(lpszSeedMessageID, lpszMessageID);
	      err = MAPIFindNext(lhSession, 0L, "IPM.Microsoft Mail.Note",
	   lpszSeedMessageID, 0L, 0L, lpszMessageID);
	      if(err != SUCCESS_SUCCESS)
	      {
	        MessageBox(0, "No more messages", "Warning",
	        MB_OK);
	        err = MAPILogoff(lhSession, 0L, 0L, 0L);
	        return(0);
	      }
	      lppMessage=(lpMapiMessage FAR *) &lpMessage;
	
	    }while(err == SUCCESS_SUCCESS);
	
	   /************** Logoff  ***************/ 
	    err = MAPILogoff(lhSession, 0L, 0L, 0L);
	    return(0);
	    }
	
	Additional query words: 3.00 3.20 3.50 visual basic read mail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	

{% endraw %}
