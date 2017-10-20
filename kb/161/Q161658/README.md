---
layout: page
title: "Q161658: XCLN: Run-Time Error 424: Object Required Form Error"
permalink: /kb/161/Q161658/
---

## Q161658: XCLN: Run-Time Error 424: Object Required Form Error

{% raw %}

	Article: Q161658
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you attempt to open a form in the Microsoft Exchange client that has been
	extended in 16-bit Visual Basic 4.0 to access an external Microsoft Access
	database, you receive the following error:
	
	  Runtime error - object error 424
	
	NOTE: This error does not occur on the computer used to design the form.
	
	This problem is resolved if you install the Microsoft Exchange Server Forms
	Designer or Visual Basic on that client computer. This is because the DLLs
	required for accessing the Microsoft Access database need to be copied and
	registered to work correctly. Merely specifying the copied DLL in the form's
	.cfg file does not register the DLL correctly. The process of installing the
	Microsoft Exchange Server Forms Designer or Visual Basic does this during the
	Setup process.
	
	MORE INFORMATION
	================
	
	The Dao2516.dll file cannot be copied over to the computer and be registered
	correctly. To correctly register it, you must do the following:
	
	1. Have all the necessary DLLs copied over to the computer, by using the .cfg
	  file.
	
	2. Copy over the Regsvr.exe file, or run it with the following command-line
	  switch:
	
	  REGSVR DAO2516.DLL
	
	This command registers the DLL correctly; after doing this the form will not give
	the runtime error.
	NOTE: To correctly register the Dao2516.dll file you must also have all of its
	supporting files on the client computer. The following files also needed for the
	registration process to work correctly:
	
	  Vaen21.olb
	  Msajt200.dll
	  Msjeterr.dll
	  Msjetint.dll
	  Vbajet.dll
	  Vbdb16.dll
	
	You must decide when and how to run Regsvr.exe to register the DLL. Running
	Regsvr.exe is the only way to register the DLL short of installing an
	application that runs the Setup Wizard, and in turn registers Dao2516.dll.
	
	
	Additional query words: WIN16 WIN95 WINNT XEXT
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
