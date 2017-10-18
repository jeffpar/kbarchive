---
layout: page
title: "Q184431: Err Msg: Windows Cannot Find Icwconn1.exe"
permalink: kb/184/Q184431/
---

## Q184431: Err Msg: Windows Cannot Find Icwconn1.exe

	Article: Q184431
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 21-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Internet Explorer, you may receive the following error
	message:
	
	  Windows cannot find Icwconn1.exe. This program is needed for opening files of
	  the type The Internet.
	
	CAUSE
	=====
	
	This behavior can occur if the name of the folder in which the Internet
	Connection Wizard is installed has been truncated to ICW-In~1.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename the ICW-In~1 folder to ICW-Internet Connection
	Wizard. To do so, follow these steps:
	
	1. Double-click My Computer.
	
	2. Double-click the hard disk on which Windows is installed.
	
	3. Double-click the Program Files folder.
	
	4. Right-click the ICW-In~1 folder, and then click Rename.
	
	5. Type ICW-Internet Connection Wizard,and then press ENTER.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. 2.00
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
