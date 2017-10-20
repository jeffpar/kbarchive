---
layout: page
title: "Q141062: PC MAPI WRmt: ErrMsg: MS Mail32 Notification: MAPISRV.EXE..."
permalink: /kb/141/Q141062/
---

## Q141062: PC MAPI WRmt: ErrMsg: MS Mail32 Notification: MAPISRV.EXE...

{% raw %}

	Article: Q141062
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have installed Microsoft Mail Remote for Windows on Microsoft Windows NT,
	and you are using the 32-bit version of Mail included with Windows NT, when you
	run a Messaging Application Programming Interface (MAPI) application, you may
	receive the following error:
	
	  MS MAIL32 Notification: MAPISRV.EXE - Bad Image. The application or
	  DLL\DosDevices\C:\WINNT35\system\MSRMT.DLL is not a valid Windows NT image.
	  Please check this against your installation diskette.
	
	CAUSE
	=====
	
	The error occurs when MAPI calls are thunked to MAPI32.DLL (32-bit MAPI service
	provider) that looks for a 32-bit store and transport provider, and they did not
	find one because MSRMT.DLL is a 16-bit transport provider.
	
	RESOLUTION
	==========
	
	Copy the 16-bit MAPI.DLL (size 53,536 bytes, dated 04-06-93) that came with
	Microsoft Remote Mail from the SYSTEM directory to the SYSTEM32 directory.
	
	For example:
	
	  c:\
	  cd \winnt\system32
	  ren mapi.dll mapi.sav
	  copy c:\winnt\system\mapi.dll
	
	
	Additional query words: 3.00 3.20 3.50 workstation server 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350 kbMailRemote320
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	

{% endraw %}
