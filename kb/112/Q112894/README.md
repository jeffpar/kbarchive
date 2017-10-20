---
layout: page
title: "Q112894: PC Adm: Err Msg: Notice 22 Error Creating Mailbox"
permalink: /kb/112/Q112894/
---

## Q112894: PC Adm: Err Msg: Notice 22 Error Creating Mailbox

{% raw %}

	Article: Q112894
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 2.1x, 3.0, 3.0a, and 3.2 of Microsoft Mail for PC Networks, when
	you add new users to the Postoffice Address List (PAL), the following error may
	occur:
	
	  Notice 22
	  Error Creating Mailbox
	
	CAUSE
	=====
	
	Two possible causes of this error are:
	
	- Insufficient network rights
	
	- A missing or corrupted CONTROL.GLB file
	
	RESOLUTION
	==========
	
	NOTE: To change any files, all users must be logged off of the postoffice.
	
	To resolve this problem, ensure you have adequate network rights. If your
	CONTROL.GLB file is missing or corrupted, either restore it from a backup copy
	or copy the CONTROL.GLB file from another postoffice and then use the MS-DOS
	DEBUG program to check that the next mailbag and mail message created are
	synchronized with the files already created.
	
	The size of the CONTROL.GLB file should always be 8 bytes. If corruption has
	occurred, you can use the DEBUG program to reset the file size back to 8 bytes:
	
	1. From the MS-DOS command prompt, type the following:
	
	  " debug control.glb" (without the quotation marks)
	
	2. Type the following commands at the DEBUG prompts:
	
	  " -rcx
	  cx 0000
	  :8
	  -f100,107,0
	  -w" (without the quotation marks)
	
	  The following appears:
	
	  writing 0008 bytes
	
	  Type the following:
	
	  " -q" (without the quotation marks)
	
	Additional query words: 2.10x 3.00 3.00a 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	

{% endraw %}
