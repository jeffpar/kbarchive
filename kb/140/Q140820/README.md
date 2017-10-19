---
layout: page
title: "Q140820: Wrong Info in &quot;Select Client/Server Protocols&quot; Dialog"
permalink: /kb/140/Q140820/
---

## Q140820: Wrong Info in &quot;Select Client/Server Protocols&quot; Dialog

	Article: Q140820
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You can only use one client/server protocol to communicate with a SNA Server
	from a Windows NT SNA Server Client and the Client Setup erroneously displays
	the following Select Client/Server Protocols dialog if multiple protocols are
	detected on the Windows NT system:
	
	  Several client/server protocols have been detected on this computer.
	
	  SNA Client can work with any or all of them. Please choose the ones you want
	  by clicking on their check boxes.
	
	  Microsoft Networking (Named Pipes)
	  Novell Netware
	  Banyan Vines
	  TCP/IP
	
	When you choose Help for this dialog box, the following information appears:
	
	  
	
	  Select Client/Server Protocol
	
	  If Setup detects more than one client/server protocol on your computer, you
	  must specify the client/server protocol(s) to use with SNA Server.
	
	  To select client/server protocols
	
	  1. In the Select Client/Server Protocols dialog box, select one, several, or all
	  of the check boxes:
	
	  Microsoft Networking (Named Pipes)
	  Novell NetWare (IPX/SPX) (see Note on SPXII Protocol)
	  Banyan VINES (see Note on Banyan Vines )
	  TCP/IP (see Note on TCP/IP Protocol)
	  (SNA servers only:) AppleTalk
	
	  If the computer you are installing on does not include one or several of the
	  client/server protocols, the corresponding check boxes are unavailable.
	
	  2. Choose Continue.
	
	  You will be prompted to supply the name of the network domain or SNA Server
	  Subdomain.
	
	CAUSE
	=====
	
	The Windows NT SNA Server Client Setup program was calling the same
	"Client/Server Protocol" information called during SNA Server Setup.
	
	RESOLUTION
	==========
	
	The setup scripts for the Windows NT SNA Server Client have been modified so
	that the Client/Server Protocol dialogs return information specific to the
	Windows NT SNA Server Client.
	
	Microsoft has updated the following files to correct this problem:
	
	  <snaroot>\SETUP.INF
	  <snaroot>\SNAFILES.INF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
