---
layout: page
title: "Q254035: XADM: Stack Overflow While Deleting Child Folders in a Deep Hier"
permalink: kb/254/Q254035/
---

## Q254035: XADM: Stack Overflow While Deleting Child Folders in a Deep Hier

	Article: Q254035
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to delete a folder hierarchy, the information store may
	experience a stack overflow condition. This condition is directly related to the
	depth of the hierarchy and the configuration of the computer (for example, the
	amount of memory, processor speed, and so on).
	
	If you are experiencing this issue, the stack is similar to the following stack:
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	066a2ffc  1015fa82  04ee7348 05af0108 066a302c ESE!DwUtilGetCurrentThreadId
	066a300c  1015f561  066a3024 1000f800 00000001 ESE!CRIT::FAssertMine+0x12
	066a302c  1000f7e7  066a3058 1000ae18 05ad0501 ESE!CRIT::Enter+0x11
	066a3034  1000ae18  05ad0501 00000021 78001103 ESE!BFICRITPGNOEnterCriticalSection+0x17
	066a3058  100080d1  05ad0500 05ad0501 00000021 ESE!FBFAssertReadLatch+0x38
	066a3214  1002f560  05ad0500 04ee7300 04ee7301 ESE!ErrBFReadLatchPage+0xb1
	066a3254  1002f4ef  05ad0500 05ad0501 00000021 ESE!CPAGE::ErrGetReadPage_+0x60
	066a3270  100300c1  05ad0500 00000001 00000021 ESE!CPAGE::ErrGetReadPage+0x1f
	066a329c  1003003b  05ad0500 00000001 00000021 ESE!CSR::ErrGetReadPage+0x61
	066a32c0  1002bbc6  05ad0500 00000001 00000021 ESE!CSR::ErrGetPage+0x6b
	066a32ec  10026ba3  04ee72d8 00000002 1018fafc ESE!ErrBTIGotoRoot+0x76
	066a33a8  10027aa8  04ee72d8 066a33f8 00000002 ESE!ErrBTDown+0x233
	066a3408  1007da01  04ee72d8 04ee7330 00000002 ESE!ErrBTGotoBookmark+0x118({...})
	066a3448  101088c6  04ee72d8 066a34ac 1020767c ESE!ErrDIRGotoBookmark+0x101({...})
	066a34dc  10109998  04ee72d8 00000001 00000000 ESE!ErrRECIMove+0x516
	066a3648  10063ebd  05ad0500 04ee72d8 00000008 ESE!ErrIsamSeek+0xee8
	066a3668  100ca1c6  05ad0500 04ee72d8 00000008 ESE!ErrDispSeek+0x4d
	066a36ac  100ca153  05ad0500 04ee72d8 00000008 ESE!JetSeek+0xd6
	066a36f0  0040251c  05ad0500 04ee72d8 00000008 ESE!JetSeek+0x63
	066a3708  00536d5e  00000008 0679f844 00000000 STORE!JTAB_BASE::EcSeek+0x23
	066a3838  00594bae  00000000 06c27060 066a394c STORE!EcDeleteFolderChildren+0x61
	066a3908  00536e28  00000000 06c27060 066a3b64 STORE!EcDeleteFolderHier+0x230
	066a3a50  00594bae  00000000 06c27060 066a3b64 STORE!EcDeleteFolderChildren+0x12b
	066a3b20  00536e28  00000000 06c27060 066a3d7c STORE!EcDeleteFolderHier+0x230
	066a3c68  00594bae  00000000 06c27060 066a3d7c STORE!EcDeleteFolderChildren+0x12b
	066a3d38  00536e28  00000000 06c27060 066a3f94 STORE!EcDeleteFolderHier+0x230
	066a3e80  00594bae  00000000 06c27060 066a3f94 STORE!EcDeleteFolderChildren+0x12b
	066a3f50  00536e28  00000000 06c27060 066a41ac STORE!EcDeleteFolderHier+0x230
	066a4098  00594bae  00000000 06c27060 066a41ac STORE!EcDeleteFolderChildren+0x12b
	066a4168  00536e28  00000000 06c27060 066a43c4 STORE!EcDeleteFolderHier+0x230
	066a42b0  00594bae  00000000 06c27060 066a43c4 STORE!EcDeleteFolderChildren+0x12b
	066a4380  00536e28  00000000 06c27060 066a45dc STORE!EcDeleteFolderHier+0x230
	066a44c8  00594bae  00000000 06c27060 066a45dc STORE!EcDeleteFolderChildren+0x12b
	066a4598  00536e28  00000000 06c27060 066a47f4 STORE!EcDeleteFolderHier+0x230
	066a46e0  00594bae  00000000 06c27060 066a47f4 STORE!EcDeleteFolderChildren+0x12b
	066a47b0  00536e28  00000000 06c27060 066a4a0c STORE!EcDeleteFolderHier+0x230
	066a48f8  00594bae  00000000 06c27060 066a4a0c STORE!EcDeleteFolderChildren+0x12b
	066a49c8  00536e28  00000000 06c27060 066a4c24 STORE!EcDeleteFolderHier+0x230
	066a4b10  00594bae  00000000 06c27060 066a4c24 STORE!EcDeleteFolderChildren+0x12b
	066a4be0  00536e28  00000000 06c27060 066a4e3c STORE!EcDeleteFolderHier+0x230
	066a4d28  00594bae  00000000 06c27060 066a4e3c STORE!EcDeleteFolderChildren+0x12b
	... 250 more iterations.
	
	CAUSE
	=====
	
	This issue can occur because the method Exchange Server uses to delete a folder
	hierarchy walks the folder hierarchy from the top down and performs a reverse
	recursive delete. If a hierarchy is large, the stack can become so large that
	the system runs out of stack space (and generates a stack overflow).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q248838engi.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25443)
	  Alpha: DownloadDownload Q248838enga.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25444)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	WORKAROUND
	==========
	
	To work around this issue, delete the folders by hand. Start from the bottom
	child folder and delete the folders in increments.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
