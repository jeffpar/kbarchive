---
layout: page
title: "Q103847: PC MAPI: DocErr: Send Attachment Sample Code Correction"
permalink: kb/103/Q103847/
---

## Q103847: PC MAPI: DocErr: Send Attachment Sample Code Correction

	Article: Q103847
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	The sample code on page 87 of the version 3.0 Microsoft Mail for PC
	Networks "Technical Reference" manual contains errors that will cause the
	code to not work. The following is the corrected sample code:
	
	
	  void f1()
	  {
	   long err;
	
	   MapiFileDesc file = { 0, 0, -1L, "c:\\tmp\tmp.wk3", "budget17.wk3",
	   NULL };
	   MapiMessage note = { 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0,
	   NULL, 1, &file };
	
	   err = MAPISendMail(0L, 0L, &note, MAPI_DIALOG, 0L);
	   if (err != SUCCESS_SUCCESS)
	       printf("Unable to send the message\n");
	  }
	
	  void f2()
	  {
	   long err;
	
	   MapiFileDesc file = { 0, 0, -1L, "c:\\tmp\tmp.wk3", "budget17.wk3",
	   NULL };
	   MapiMessage note = { 0, NULL,"Attached is the budget proposal.\r\nSee
	   you Monday.\r\n",NULL, NULL, NULL, 0, NULL, 2, NULL, 1, &file };
	
	   MapiRecipDesc recip[2];
	
	   recip[0].ulReserved = 0;
	   recip[0].ulRecipClass = MAPI_TO;
	   recip[0].lpszName = "Sally Jones";
	   recip[0].lpszAddress = NULL;
	   recip[0].ulEIDSize = 0;
	   recip[0].lpEntryID = NULL;
	
	   recip[1].ulReserved = 0;
	   recip[1].ulRecipClass = MAPI_CC;
	   recip[1].lpszName = "Marketing";
	   recip[1].lpszAddress = NULL;
	   recip[1].ulEIDSize = 0;
	   recip[1].lpEntryID = NULL;
	
	   note.lpRecips = recip;
	
	   err = MAPISendMail(0L, 0L, &note, 0L, 0L);
	   if (err != SUCCESS_SUCCESS)
	      printf("Unable to send the message\n");
	  }
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
