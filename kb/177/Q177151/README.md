---
layout: page
title: "Q177151: FP97: DCOM Update Required for VSS Integration With MSPWS"
permalink: kb/177/Q177151/
---

## Q177151: FP97: DCOM Update Required for VSS Integration With MSPWS

	Article: Q177151
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbdta
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to integrate functionality between Microsoft FrontPage 97 and
	Microsoft Visual Source Safe on the Microsoft Personal Web Server for Windows
	95.
	
	CAUSE
	=====
	
	The integration between FrontPage and Visual Source Safe on Microsoft Internet
	Information Server (IIS), Microsoft Windows NT Workstation Peer Web Services, or
	Microsoft Personal Web Server for Windows 95 requires functionality that is only
	present in the Distributed Component Object Model (DCOM).
	
	This capability was introduced in Microsoft Windows NT 4.0 Workstation and
	Server. It was not originally part of Windows 95. Therefore, FrontPage cannot be
	integrated with Visual Source Safe on the Microsoft Personal Web Server for
	Windows 95.
	
	RESOLUTION
	==========
	
	To integrate Microsoft FrontPage and Microsoft Visual SourceSafe on the
	Microsoft Personal Web Server for Windows 95, obtain and install the DCOM update
	for Windows 95. You can obtain the DCOM update for Windows 95 by connecting to
	the following Microsoft World Wide Web site:
	
	  http://www.microsoft.com/com/dcom/dcom1_2/dcom1_2.asp
	
	NOTE: The DCOM update is also installed if you install Microsoft Internet
	Explorer 4.0.
	
	MORE INFORMATION
	================
	
	Microsoft FrontPage 97 does not support DCOM because it was developed after
	FrontPage 97 was released. FrontPage 97 was not tested with DCOM and it is not
	supported running under it. FrontPage 98 was developed after the introduction of
	DCOM and was tested with it and is supported with DCOM.
	
	Additional query words: DCOM OLE FP97 Visual Source Safe MSPWS Windows 95 integration fpvss
	
	======================================================================
	Keywords          : kbinterop kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97Search kbZNotKeyword3
	Version           : :
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
