---
layout: page
title: "Q93568: PC Ext: Err Msg: Cannot Connect to Server"
permalink: /kb/093/Q93568/
---

## Q93568: PC Ext: Err Msg: Cannot Connect to Server

	Article: Q93568
	Product(s): Microsoft Mail For PC Networks
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	In Microsoft Mail for PC Networks, versions 2.1 and 3.0, when you use the
	External Mail program (EXTERNAL.EXE) to connect dynamically to Novell NetWare
	3.11 servers, you may see the following error message in the SESSION.LOG file
	for each or some of the dynamically configured postoffices:
	
	  Cannot connect to server
	
	This error occurs when you create logs using EXTERNAL.EXE by using the
	command-line options -V, -Q1, and -L.
	
	CAUSE
	=====
	
	The AUTOEXEC.NCF file on the Novell server does not include the following
	command with this syntax:
	
	     SET ALLOW UNENCRYPTED PASSWORDS = ON
	
	RESOLUTION
	==========
	
	From the server prompt or Rconsole, load the Install program and edit the
	AUTOEXEC.NCF file to include the needed SET command shown above.
	
	Additional query words: 2.10 3.00 INIT_MASTER 3rdParty
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
