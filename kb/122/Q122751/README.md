---
layout: page
title: "Q122751: PC DirSync: Err Msg: Gateway Not Installed: &lt;Gateway Name&gt;"
permalink: /kb/122/Q122751/
---

## Q122751: PC DirSync: Err Msg: Gateway Not Installed: &lt;Gateway Name&gt;

	Article: Q122751
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear in the DIRSYNC.LOG file on a postoffice:
	
	  Error [ 44] Gateway not installed: <Gateway Name>
	
	Where the <Gateway Name> can be PROFS, SNADS, SMTP, X.400, or any other
	gateway product.
	
	CAUSE
	=====
	
	This error message will most often occur on a directory synchronization
	(Dir-Sync) requestor postoffice on which the gateway identified by the error
	message is not installed. In most cases, this error message is caused by the
	Import program (IMPORT.EXE) performing a resynchronization procedure against a
	RESYNC.GLB file. Generally, the IMPORT.EXE process deletes the RESYNC.GLB file
	after successful completion and this error message will not occur again. If this
	is the case, you can safely ignore this error message.
	
	If the administrator of the Dir-Sync server postoffice creates a RESYNC.GLB file,
	and this Dir-Sync server has one or more gateway or gateway access components
	installed, this RESYNC.GLB file will contain gateway address information. When
	this RESYNC.GLB file is copied to the GLB directory of a requestor postoffice
	that does not have the gateway access component(s) installed, and IMPORT.EXE is
	then run, this error message will appear.
	
	The IMPORT.EXE command line parameters causing this error message will very
	likely be:
	
	  import admin -ppassword -d<drive> -q
	
	Additional query words: 3.00 3.20 3.20a 3.50 requester dirsync dirsynch
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	
	=============================================================================
	
