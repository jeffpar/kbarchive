---
layout: page
title: "Q161665: Error Message When You Change the MSN Access Number"
permalink: /kb/161/Q161665/
---

## Q161665: Error Message When You Change the MSN Access Number

	Article: Q161665
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbmsn
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change the access number for MSN, The Microsoft Network, you
	may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the program vendor.
	
	When you click Details, you may see any one of the following messages:
	
	- 
	
	  Guide caused an invalid page fault in module Mcm.dll.
	
	- 
	
	  Explorer caused an invalid page fault in module Kernel32.dll.
	
	- 
	
	  Explorer caused an invalid page fault in module Mcm.dll.
	
	CAUSE
	=====
	
	The behavior can occur if the Phone.pbk file is damaged or contains a blank line
	between two phone numbers.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	Method 1
	--------
	
	1. Use Wordpad to open the Phone.pbk file in the Program Files\The Microsoft
	  Network folder.
	
	2. Look for a blank line in the document and then delete the blank line.
	
	3. Save the revised document, making sure it is saved as a text file with the
	  name Phone.pbk.
	
	Method 2
	--------
	
	Click Start, click Run, and then type "signup" (without the quotation marks) in
	the Open box. When the MSN Signup program starts, click to select the I Am
	Already A Member check box. When you connect to MSN, the phone.pbk file is
	updated automatically.
	
	Method 3
	--------
	
	Run the Internet Setup Wizard to download a new phone book. To run the wizard,
	follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "inetwiz" (without the quotation marks), and then click
	  OK.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0
	Issue type        : kbprb
	
	=============================================================================
	
