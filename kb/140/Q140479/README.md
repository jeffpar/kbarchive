---
layout: page
title: "Q140479: Updated Sage.dll File Corrects Floating-Point Math Errors"
permalink: /kb/140/Q140479/
---

## Q140479: Updated Sage.dll File Corrects Floating-Point Math Errors

	Article: Q140479
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbfile kbtool win95 kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program performs a floating-point calculation, the result may be
	incorrect.
	
	CAUSE
	=====
	
	This problem can occur if System Agent (Sage.exe) is running.
	
	
	This problem is known to affect the following programs:
	
	- Borland Paradox for Windows versions 5.0 and 5.0a
	
	  When you use the Paradox ObjectPAL Number() function to convert a string to a
	  floating-point number, the value returned to the function is slightly
	  different than the string value. For example, if you pass the string "6.136"
	  to the function, the value 6.136000000000000011 is returned. Note that this
	  problem does not occur if System Agent is not running.
	
	
	RESOLUTION
	==========
	
	Microsoft has released a new version of the Sage.dll file that corrects this
	problem. The new Sage.dll file is version 4.40.311 and is dated 10/24/95 with a
	size of 69,120 bytes.
	
	To install the new Sage.dll file, follow these steps:
	
	1. Download the Plusupd1.exe file from the Microsoft Download Center to an empty
	  folder.
	
	2. In Windows Explorer or My Computer, double-click the Plusupd1.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Plusupd1.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Note that Microsoft has also released this update as part of Microsoft Windows 95
	Service Pack 1. For information about Microsoft Windows 95 Service Pack 1,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	Additional query words: precision decimal fpu servicepack1
	
	======================================================================
	Keywords          : kbfile kbtool win95 kbgraphxlinkcritical 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : :95
	
	=============================================================================
	
