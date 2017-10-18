---
layout: page
title: "Q107582: Mail Components Are Always Installed"
permalink: kb/107/Q107582/
---

## Q107582: Mail Components Are Always Installed

	Article: Q107582
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During Microsoft Windows for Workgroups Setup, the Workgroups Mail, and
	Schedule+ component files (FRAMEWRK.DLL, MSSFS.DLL, and MAILSPL.EXE) are
	installed even if the Mail and Schedule+ programs are not.
	
	MORE INFORMATION
	================
	
	During installation of Windows for Workgroups 3.11, you can choose the Custom
	Install option. With this option, you can elect not to install certain
	components of Windows for Workgroups, including Mail and Schedule+. If you chose
	not to install these two programs, certain Mail files are still installed:
	
	- AB.DLL is a Address Book user interface support function.
	
	- DEMILAYR.DLL is a Microsoft Work Group Add-On system services layer.
	
	- FRAMEWRK.DLL is the Workgroup Applications framework layer.
	
	- MAILMGR.DLL provides Mail Manager API support functions.
	
	- MAILSPL.EXE is the program in Workgroups Mail that spools messages from the
	  Outbox to the Postoffice and checks for new messages, which it places in the
	  Inbox.
	
	- MSSFS.DLL is the Workgroup Mail Shared File System Transport Provider and is
	  used to send and receive messages to and from the Postoffice database.
	
	- SENDFILE.DLL is a File Manager extension that allows a file to be sent as an
	  attachment.
	
	- STORE.DLL provides message store support functions.
	
	- VFORMS.DLL provides Mail viewed forms.
	
	- VPMTD.386 is the At Work PC Fax scheduler virtual device driver (VxD). This
	  VxD is loaded from a DEVICE= line in the [386Enh] section of the SYSTEM.INI
	  file.
	
	These files are considered Windows dynamic link libraries (DLLs) that other
	applications depend on and therefore are installed regardless of whether Mail
	and Schedule+ are installed.
	
	Additional query words: 3.11 remove components install setup
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
