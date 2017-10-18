---
layout: page
title: "Q264484: Word Tables Not Indexed Correctly When Adjacent Cells Have Digit"
permalink: kb/264/Q264484/
---

## Q264484: Word Tables Not Indexed Correctly When Adjacent Cells Have Digit

	Article: Q264484
	Product(s): Internet Information Server
	Version(s): 2.0,2000
	Operating System(s): 
	Keyword(s): kbWin2000PreSP2Fix kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Indexing Service, included with:
	   - Microsoft Windows 2000 Professional 
	   - Microsoft Windows 2000 Advanced Server 
	   - Microsoft Windows 2000 Server 
	   - Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If adjacent cells in a Microsoft Word table contain digits (for example,
	word1,2word), Index Server 2.0 and Indexing Service 3.0 incorrectly index the
	table so that you cannot query on word1 or 2word.
	
	CAUSE
	=====
	
	The OffFilt.dll filter represents tables with a comma. This makes it impossible
	for the Brute Force Tokenizer (BFT) to distinguish between a comma-separated
	number and two numbers in a table. Therefore, if two adjacent cells have numeric
	values (F0043291 and 8PCMC4), they are stored as one word (F0043291,8PCMC4).
	There is no way to query each value individually.
	
	RESOLUTION
	==========
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version      Size     File name
	  -----------------------------------------------------
	  08-Sep-2000  13:54  2000.7.28.0  229,442  Offfilt.dll  
	
	
	Windows NT, Windows 95, Windows 98, Windows ME
	----------------------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time   Version      Size     File name    Platform
	  ----------------------------------------------------------------------
	  28-Jul-2000 15:49  2000.7.28.0  229,442  OffFilt.dll  Windows NT
	  28-Jul-2000 16:16  2000.7.28.0  229,442  OffFilt.dll  Windows 95/98/ME
	
	
	
	WORKAROUND
	==========
	
	If you manually add a blank space between the trailing commas and the word in
	question, you can index and query the document. You can also query on the value
	of the two columns.
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Windows 2000. This problem was
	first corrected in Windows 2000 Service Pack 2.
	
	Windows NT, Windows 95, Windows 98, Windows ME
	----------------------------------------------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP2Fix kbWin2000SP2Fix 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100
	Version           : :2.0,2000
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
