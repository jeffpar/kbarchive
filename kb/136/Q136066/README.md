---
layout: page
title: "Q136066: PC MAPI: Files Required to Access a Mail for PC Networks PO"
permalink: /kb/136/Q136066/
---

## Q136066: PC MAPI: Files Required to Access a Mail for PC Networks PO

{% raw %}

	Article: Q136066
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A simple Message Application Programming Interface (MAPI) application allows
	users to access messaging services, such as Mail for PC Networks. However, in
	order to access Mail for PC Networks on a system that does not have Microsoft
	Mail for Windows installed, you must place the files listed below, the
	executable file, and the run time files onto the system so that the application
	can be launched.
	
	MORE INFORMATION
	================
	
	In a typical setting, the files needed are:
	
	In the <WINDIR>/SYSTEM directory:
	
	  AB.DLL
	  DEMILAYR.DLL
	  FRAMEWRK.DLL
	  MAPI.DLL
	  MSSFS.DLL
	  MAILMGR.DLL
	  MAILSPL.EXE
	  PABNSP.DLL
	  STORE.DLL
	  VFORMS.DLL
	
	In the <WINDIR> directory:
	
	  MSMAIL.INI
	
	NOTE: If the application uses objects that make calls to MAPI.DLL and not to
	MAPI.DLL directly, the object files must be placed on the system as well; for
	example, MSMAPI.VBX.
	
	Additional query words: 3.00 3.20 1.00 Visual Basic C++
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
