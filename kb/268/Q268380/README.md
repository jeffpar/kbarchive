---
layout: page
title: "Q268380: XADM: Store Crashes When RTF Is Enabled over the IMAP4 Protocol"
permalink: /kb/268/Q268380/
---

## Q268380: XADM: Store Crashes When RTF Is Enabled over the IMAP4 Protocol

	Article: Q268380
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server information store may stop responding (crash) and produce a
	Dr. Watson log and a User.dmp file with the following call stack:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  054af980  006edf2c  00000000 37020000 054af9e4 STORE!TNEF_AddProps+0x348
	  054afa10  0047ce0c  00000000 37020000 054af9e4 STORE!CmnBptMessage::hrTNEFAttach+0xc0
	  054afa50  0047cba4  00000000 37020000 054af9e4 STORE!CRFCMIMEemtr::hrEndOfBody+0x200
	  054afab0  0047909c  00000000 00000000 054af9e4 STORE!CmcvtrBdy::hrEmit+0x190
	  054afb00  00478f80  00000000 00000000 054af9e4 STORE!CINETemtr::hrEmit+0x100
	  054afb40  004a3430  00000000 00000000 054af9e4 STORE!CConvertStream::Read+0x11c
	  054afb80  004a2674  00000000 00000000 054af9e4 STORE!MCE::EcRenderBodyPart+0x25c
	  054afbf0  0049e004  00000000 00000000 054af9e4 STORE!MCE::EcDetermine822Size+0x120
	  054afc90  0049e8b0  00000000 00000000 054af9e4 STORE!IMAPCON::EcProcessFetchInfo+0x290
	  054afcd0  004a494c  00000000 00000000 054af9e4 STORE!IMAPCON::EcQueueFetchSet+0x128
	  054afd20  004a4f80  00000000 00000000 054af9e4 STORE!IMAPCON::EcProcessFetchSet+0x198
	  054afd90  004a1f50  00000000 00000000 054af9e4 STORE!IMAPCON::CbFetch+0x5bc
	  054afdf0  004a1340  00000000 00000000 054af9e4 STORE!IMAPCON::CbUid+0xe0
	  054afe30  6fcc8d24  00000000 00000000 054af9e4 STORE!IMAPCON::CbCommand+0xd08
	
	CAUSE
	=====
	
	An IMAP user has sent a command that the information store does not process
	correctly. The following command may cause this issue:
	
	  007H FETCH 1 (INTERNALDATE RFC822.SIZE FLAGS ENVELOPE BODY UID)
	
	NOTE: The 007H and the 1 following the FETCH command may be different depending
	on conversation key and the message being accessed.
	
	You can configure the IMAP protocol in the Exchange Server Administrator program
	to allow Rich Text Format (RTF). This setting enables the IMAP protocol to
	encode any OLE-embedded objects into a TNEF stream. When the preceding command
	is given to the IMAP service to retrieve a message with an embedded OLE object,
	such as a Clip Art picture, the preceding command may cause the store to crash.
	When the preceding command cannot correctly encode the OLE object into a TNEF
	stream. The preceding command works correctly when the setting to allow RTF is
	not set in the Administrator program.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191914 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
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
	
	You can turn off the option to allow RTF in the Administrator program. To do
	so:
	
	- Start the Administrator program, and connect to the server that is
	  experiencing this issue.
	
	- Locate the Site\Configuration\Protocols object.
	
	- Double-click the IMAP4 object in the right pane.
	
	- Click the Message Format tab.
	
	- Click to clear the "Use Microsoft Exchange rich-text format" check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
