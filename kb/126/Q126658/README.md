---
layout: page
title: "Q126658: PC MAPI: Sample C Code for MAPIAddress Function Call"
permalink: /kb/126/Q126658/
---

## Q126658: PC MAPI: Sample C Code for MAPIAddress Function Call

{% raw %}

	Article: Q126658
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The simple messaging application program interface (MAPI) for Microsoft Mail for
	PC Networks includes a function that allows developers to access the address
	list user interface.
	
	The following C code illustrates a successful call to this function. This example
	allows address browsing only. The code was compiled, linked, and ran
	successfully using Microsoft Visual C++, version 1.5.
	
	MORE INFORMATION
	================
	
	     /* start code for MAPIAddress() call */ 
	     #include <stdio.h>
	     #include <windows.h>
	     #include <mapi.h>
	
	     lpMapiRecipDesc lppNewRecips;
	
	     int main(void)
	  {
	       LHANDLE lhSession;
	       ULONG rc, lpnNewRecips = 0;
	
	       rc = MAPILogon(0L, "", "", MAPI_LOGON_UI, 0L, &lhSession);
	
	       rc = MAPIAddress(lhSession, 0L, NULL, 0L, NULL, 0L, NULL, 0L, 0L, \ 
	       &lpnNewRecips, &lppNewRecips);
	
	       if( rc != SUCCESS_SUCCESS )
	          printf("MAPIAddress failed with %d", rc);
	
	       rc=MAPIFreeBuffer(lppNewRecips);/* free the memory used by MAPIAddress
	     */ 
	
	       rc = MAPILogoff(lhSession, 0L, 0L, 0L);
	
	      return (0);
	
	     }
	     /* end code */  
	
	For more information, please see the Microsoft Mail "Technical Reference," pages
	96-98.
	
	Additional query words: 3.00 3.20 MAPI address function
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
