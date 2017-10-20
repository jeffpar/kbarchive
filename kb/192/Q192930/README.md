---
layout: page
title: "Q192930: XCCC: OWA Error 404 Opening Messages After You Apply 5.5 SP"
permalink: /kb/192/Q192930/
---

## Q192930: XCCC: OWA Error 404 Opening Messages After You Apply 5.5 SP

{% raw %}

	Article: Q192930
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to open messages with the Outlook Web Access (OWA) client with
	Microsoft Exchange Server, version 5.5 Service Pack 1, you may receive the
	following error message:
	
	  HTTP Error 404 File Not Found. The Web server cannot find the file or
	  script you asked for. Please check the URL to ensure that the path is
	  correct. Please contact the server's administrator if this problem
	  persists.
	
	CAUSE
	=====
	
	The URL path for messages is incorrect. The OWA client is looking for a message
	path of:
	
	    javascript:parent.openNewWindow("/exchange/forms/IPM.NotefrmRoot.asp?...
	
	Instead of:
	
	    javascript:parent.openNewWindow("/exchange/forms/IPM/Note/frmRoot.asp?..
	
	There is a calculation and check done on the files in the Webdata directory to
	determine if the object is a file or a directory. If some flags (such as Archive
	or Compressed) are set on the directory, it may cause the calculation routine to
	be incorrect and produce the wrong URL.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Outlook Web Access
	
	  File Name     Version
	  -----------------------
	  Cdohtml.dll   5.5.2404.0
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Download the compressed Setup file appropriate for the server for your hardware
	platform. Select the appropriate files as indicated by the following list:
	
	     Alpha AXP(TM)     Psp1cdoa.exe
	     Intel(R)          Psp1cdoi.exe
	
	1. Download appropriate file to a temporary location on the server's local hard
	  drive.
	
	  Example: To download the English version for the Intel platform, visit the
	  following Microsoft Web site:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP1/CDOHTML-fix/Psp1cdoi.exe
	
	2. Unzip the file by typing the file name of the self-extracting archive at the
	  command prompt.
	
	  Example: The version for the Intel platform will be Psp1cdoi.
	
	3. Stop the World Wide Web Publishing Service and the Internet Information
	  Server (IIS) Administrator Service (if you are using IIS 4.0).
	
	4. Rename your existing Cdohtml.dll in your Exchsrvr\Bin folder to Cdohtml.old.
	
	5. Copy the included Cdohtml.dll to your Exchsrvr\Bin folder.
	
	6. Copy the included Cdohtml.dbg file to your Winnt\Symbols folder (optional).
	
	7. Click Start, Run, and in the text box type:
	
	  "regsvr32.exe <drive>:\exchsrvr\bin\cdohtml.dll" (without the quotation
	  marks)
	
	  This will register the Cdohtml.dll.
	
	8. Click OK on the dialog box stating the Cdohtml.dll was registered
	  successfully.
	
	9. Start the World Wide Web Publishing Service and the Internet Information
	  Server (IIS) Administrator Service (if you are using IIS 4.0).
	
	10. The Exchange Server computer should be updated successfully now, and you
	  should no longer get the HTTP 404 error when opening messages.
	
	
	After you apply Service Pack 3 and verify that Cdohtml.dll is the proper version,
	if the problem continues to occur, uninstall the OWA component, delete the
	Exchange virtual folder in IIS (if it still exists), delete the Webdata folder
	off of the file system, and then, re-install OWA and SP3.
	
	Additional query words: exfclnfaq 5.5 sp1 OWA
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
