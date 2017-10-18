---
layout: page
title: "Q132212: PC Gen: Sample Code for CMC.DLL &quot;Who Am I&quot;"
permalink: kb/132/Q132212/
---

## Q132212: PC Gen: Sample Code for CMC.DLL &quot;Who Am I&quot;

	Article: Q132212
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	NOTE: The information supplied here is not supported by Microsoft;
	we make no warranty, implied or otherwise, regarding this codes'
	performance or reliability.
	
	The following code fragment illustrates one way to obtain the user name and
	address of the currently logged in account. The following calls use CMC.DLL
	as a static library. The code was compiled, linked and executed
	successfully using Microsoft Visual C++ version 1.5.
	
	
	  /* cmc_who.c                    */ 
	  /* This code fragment displays  */ 
	  /* the currently logged in user */ 
	
	  #include <stdio.h>
	  #include <string.h>
	  #include <windows.h>
	  #include <xcmc.h>
	  #include <client.h>
	  #include <xcmcext.h>
	  #include <xcmcmsxt.h>
	  #include <pvalloc.h>
	
	  int cmc_who(void);
	
	  int main(void)
	  {
	
	    cmc_who();
	
	    return 0;
	  }
	
	  int cmc_who(void)
	  {
	   CMC_recipient FAR *pRecipient;
	   CMC_uint32  count;
	   CMC_return_code err;
	   CMC_session_id session;
	   char szBuf[100];
	   char szBuf2[100];
	   char szMsg[100];
	   char szMsg2[100];
	   count = 0;
	
	   err = cmc_logon("", "", "", NULL, 0, 100, CMC_LOGON_UI_ALLOWED,\ 
	   &session, 0);
	
	   /* look up currently logged in user */ 
	   err = cmc_look_up(session, NULL, CMC_LOOKUP_RESOLVE_IDENTITY |\ 
	   CMC_ERROR_UI_ALLOWED, (CMC_ui_id)NULL, &count, &pRecipient, NULL);
	     if(err != CMC_SUCCESS)
	        MessageBox(0, "Error during cmc_look_up", "Error", MB_OK);
	
	   strcpy(szMsg, "Logged in user name:  ");
	   strcpy(szMsg2, "Logged in user address:  ");
	
	   /* copy the appropriate recipient fields into the  */ 
	   /* respective buffers                              */ 
	   _fstrcpy(szBuf, pRecipient -> name);
	   _fstrcpy(szBuf2, pRecipient -> address);
	
	   strcat(szMsg, szBuf);  // add the data to the descriptions
	   strcat(szMsg2, szBuf2);
	
	   MessageBox(0, szMsg, "Who Am I", MB_OK);
	   MessageBox(0, szMsg2, "Who Am I", MB_OK);
	
	   cmc_free(pRecipient);    // free the recip buffer
	
	   err = cmc_logoff(session, 0, CMC_LOGOFF_UI_ALLOWED && \ 
	   CMC_ERROR_UI_ALLOWED, NULL);
	
	   return 0;
	  }
	
	  /* end cmc_who.c */ 
	
	Additional query words: 3.20 3.20a sample code who am I mapi
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
