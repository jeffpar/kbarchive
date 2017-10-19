---
layout: page
title: "Q101750: PC Ext: Overlay Files and How They Work"
permalink: /kb/101/Q101750/
---

## Q101750: PC Ext: Overlay Files and How They Work

	Article: Q101750
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The External Mail program (EXTERNAL.EXE) included with version 3.2 of Microsoft
	Mail for PC Networks introduces overlay files to control different forms of
	communication. These files are loaded into extended memory and introduce the
	need for EXTERNAL.EXE to be stored on the local computer.
	
	There are three overlay files, which provide the following functions:
	
	- The AYSNC.OVL file controls asynchronous communication.
	
	- The X25EICON.OVL file controls communication with the Eicon X.25 card.
	
	- The X25ATLAN.OVL file controls communication with the Atlantis X.25 card.
	
	The External Mail program must load one of these overlay files because these
	files contain shared code for the Mailer and Dispatch processes to distribute
	messages on the network.
	
	By loading this part of the process into extended memory, more postoffices can be
	controlled by the External Mail program, thus getting around the memory
	constraints of version 3.0 of the External Mail program.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
