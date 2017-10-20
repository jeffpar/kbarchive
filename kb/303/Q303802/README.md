---
layout: page
title: "Q303802: HOWTO: Troubleshoot SMB Connections from IIS/ASP"
permalink: /kb/303/Q303802/
---

## Q303802: HOWTO: Troubleshoot SMB Connections from IIS/ASP

{% raw %}

	Article: Q303802
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbGrpDSSIE kbDSupport
	Last Modified: 15-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to gather the proper information to review the connection
	between an Internet Information Server (IIS) server and a Server Message Block
	(SMB) share.
	
	MORE INFORMATION
	================
	
	This article assumes familiarity with Network Monitor, Internet Information
	Server, and the TCP/IP protocol.
	
	To effectively troubleshoot issues relating to SMB file sharing, particularly in
	regard to change notification and Active Server Pages (ASP), the most useful
	information is a network trace of the file that is being requested off of the
	SMB share and evidence of a change with respect to that file.
	
	To get a good network trace of SMB traffic for IIS/ASP stale content/permission
	issues do the following:
	
	1. Close all Windows Explorer and Microsoft Internet Explorer windows, and
	  disconnect any mapped drives to the SMB share. Also close any cmd windows
	  that are open to that share.
	
	2. Stop the IIS Admin service (net stop iisadmin).
	
	3. Under the Capture menu in Network Monitor, increase the buffer size.
	
	4. Use Network Monitor to start the capture.
	
	5. Restart the Web Publishing Service (net start w3svc).
	
	6. Request the test page from a browser, preferably from a computer that is not
	  the IIS server.
	
	7. Connect to the SMB server and modify your test page. If possible, do this via
	  telnet or locally, not though an SMB share.
	
	8. Refresh your test page in Microsoft Internet Explorer and stop the trace.
	
	The following is a brief overview of how ISATQ.dll and ASP flush cached pages,
	and what information from the SMB server ASP/ISATQ is needed (and why) to purge
	a template from the cache.
	
	In order for ASP to flush the ASP page, you need to get a success from the
	redirector with either a 0 for the parameter count or the size of the buffer
	that contains the file name or list of files. This information should be in the
	change notification packet sent by the Common Internet File System (CIFS)/SMB
	server. A 0 in place of the parameter count indicates that there are too many
	changes to list. Sending a list of files is preferred over sending 0 (all
	files), and this is the way that the Windows implementation of SMB handles this.
	Managing files in this way results in a performance increase in particular for
	ASP Session and Application State.
	
	For illustration, in the Samba traces below the bits that indicate status and
	parameter count are all set to zeros, which causes ASP to fully flush the cache.
	This will result in performance degradation (including losing all sessions, and
	having the IIS application restart), but it will flush everything from the
	cache.
	
	The following is an example of a change notification coming from Samba on Linux
	(Aug 14 2000/samba-2.0.7-21ssl, and RedHat 7.0). You will notice the bits are
	not all 0 but rather they are 0x10C 0x0. The translation of the packet by
	Network Monitor shows that 0x10c is STATUS_NOTIFY_ENUM_DIR. Thus the Samba
	computer is suggesting that you enumerate the directory but not send a file name
	or a file list. At this point it is up to the redirector to translate this
	packet and send the necessary notification up the chain to the destination
	process and file that this packet refers to.
	
	As you can see in the SMB header, this change notification is destined for PID
	0x03DC (in the case of the test, this was inetinfo). In this packet there is no
	file ID (FID). In SMB traces, an FID is assigned for each file. The best way to
	get the FID of the file in question is to see the ID as it is assigned by the
	redirector when the file is retrieved from the file system, as well as the
	process ID that needs the file.
	
	14957 106.687500 SMBUNIX 00508BF1348F SMB R NT transact - NT error, System, Success, Code = (268) STATUS_NOTIFY_ENUM_DIR SMBUNIX WIN2KSRV IP 
	Frame: Base frame properties
	   Frame: Time of capture = 7/3/2001 23:29:45.187
	   Frame: Time delta from previous physical frame: 0 microseconds
	   Frame: Frame number: 14957
	   Frame: Total frame length: 129 bytes
	   Frame: Capture frame length: 129 bytes
	   Frame: Frame data: Number of data bytes remaining = 129 (0x0081)
	ETHERNET: ETYPE = 0x0800 : Protocol = IP:  DOD Internet Protocol
	   ETHERNET: Destination address : 00508BF1348F
	       ETHERNET: .......0 = Individual address
	       ETHERNET: ......0. = Universally administered address
	   ETHERNET: Source address : 0060083194AD
	       ETHERNET: .......0 = No routing information present
	       ETHERNET: ......0. = Universally administered address
	   ETHERNET: Frame Length : 129 (0x0081)
	   ETHERNET: Ethernet Type : 0x0800 (IP:  DOD Internet Protocol)
	   ETHERNET: Ethernet Data: Number of data bytes remaining = 115 (0x0073)
	IP: ID = 0x6B1F; Proto = TCP; Len: 115
	   IP: Version = 4 (0x4)
	   IP: Header Length = 20 (0x14)
	   IP: Precedence = Routine
	   IP: Type of Service = Minimize Delay
	   IP: Total Length = 115 (0x73)
	   IP: Identification = 27423 (0x6B1F)
	   IP: Flags Summary = 2 (0x2)
	       IP: .......0 = Last fragment in datagram
	       IP: ......1. = Cannot fragment datagram
	   IP: Fragment Offset = 0 (0x0) bytes
	   IP: Time to Live = 64 (0x40)
	   IP: Protocol = TCP - Transmission Control
	   IP: Checksum = 0xDE97
	   IP: Source Address = 172.26.204.104
	   IP: Destination Address = 172.26.204.32
	   IP: Data: Number of data bytes remaining = 95 (0x005F)
	TCP: .AP..., len:   75, seq: 979481609-979481684, ack:4234385737, win: 2920, src:  139 (NBT Session)  dst: 1266 
	   TCP: Source Port = NETBIOS Session Service
	   TCP: Destination Port = 0x04F2
	   TCP: Sequence Number = 979481609 (0x3A61B409)
	   TCP: Acknowledgement Number = 4234385737 (0xFC639949)
	   TCP: Data Offset = 20 (0x14)
	   TCP: Reserved = 0 (0x0000)
	   TCP: Flags = 0x18 : .AP...
	       TCP: ..0..... = No urgent data
	       TCP: ...1.... = Acknowledgement field significant
	       TCP: ....1... = Push function
	       TCP: .....0.. = No Reset
	       TCP: ......0. = No Synchronize
	       TCP: .......0 = No Fin
	   TCP: Window = 2920 (0xB68)
	   TCP: Checksum = 0x7BF9
	   TCP: Urgent Pointer = 0 (0x0)
	   TCP: Data: Number of data bytes remaining = 75 (0x004B)
	NBT: SS: Session Message, Len: 71
	   NBT: Packet Type = Session Message
	   NBT: Packet Flags = 0 (0x0)
	       NBT: .......0 = Add 0 to Length
	   NBT: Packet Length = 71 (0x47)
	   NBT: SS Data: Number of data bytes remaining = 71 (0x0047)
	SMB: R NT transact - NT error, System, Success, Code = (268) STATUS_NOTIFY_ENUM_DIR
	   SMB: NT status code = 0x10C, Facility = System, Severity = Success, Code = (268) STATUS_NOTIFY_ENUM_DIR
	           SMB: NT Status Severity Code = Success
	           SMB: NT Status Customer Code = 0 (0x0)
	           SMB: NT Status Reserved Bit = 0 (0x0)
	           SMB: NT Status Facility = System
	           SMB: NT Status Code System Success = STATUS_NOTIFY_ENUM_DIR
	   SMB: Header: PID = 0x03DC TID = 0x0005 MID = 0x1659 UID = 0x0072
	       SMB: Tree ID      (TID) = 5 (0x5)
	       SMB: Process ID   (PID) = 988 (0x3DC)
	       SMB: User ID      (UID) = 114 (0x72)
	       SMB: Multiplex ID (MID) = 5721 (0x1659)
	       SMB: Flags Summary = 136 (0x88)
	           SMB: .......0 = Lock & Read and Write & Unlock not supported
	           SMB: ......0. = Send No Ack not supported
	           SMB: ....1... = Using caseless pathnames
	           SMB: ...0.... = No canonicalized pathnames
	           SMB: ..0..... = No Opportunistic lock
	           SMB: .0...... = No Change Notify
	           SMB: 1....... = Server response
	       SMB: flags2 Summary = 16385 (0x4001)
	           SMB: ...............1 = Understands long filenames
	           SMB: ..............0. = Does not understand extended attributes
	           SMB: ...0............ = No DFS namespace
	           SMB: ..0............. = No paging of IO
	           SMB: .1.............. = Using NT status codes
	           SMB: 0............... = Using ASCII strings
	   SMB: Command = C NT transact
	       SMB: Word count = 18
	       SMB: Word parameters
	       SMB: Total Parameter Count = 0 (0x0)
	       SMB: Total Data Count = 0 (0x0)
	       SMB: Parameter Count = 0 (0x0)
	       SMB: Parameter Displacement = 0 (0x0)
	       SMB: Data Count = 0 (0x0)
	       SMB: Data Offset = 0 (0x0)
	       SMB: Data Displacement (NT) = 0 (0x0)
	00000:  00 50 8B F1 34 8F 00 60 08 31 94 AD 08 00 45 10   
	00010:  00 73 6B 1F 40 00 40 06 DE 97 AC 1A CC 68 AC 1A   
	00020:  CC 20 00 8B 04 F2 3A 61 B4 09 FC 63 99 49 50 18   
	00030:  0B 68 7B F9 00 00 00 00 00 47 FF 53 4D 42 A0 0C   
	00040:  01 00 00 88 01 40 00 00 00 00 00 00 00 00 00 00   
	00050:  00 00 05 00 DC 03 72 00 59 16 12 00 00 00 00 00  
	00060:  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   
	00070:  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  
	00080:  00      
	
	To use a debugger to see what ASP received from the redirector in regard to the
	change notification sent by the SMB server, set the following breakpoints.
	
	  bp KERNEL32!ReadDirectoryChangesW
	  bp asp!CASPDirMonitorEntry__ActOnNotification
	
	Then, when you hit the ActOnNotification breakpoint, look at the first and second
	parameters. The first parameter is the status that the redirector is giving to
	ASP for the change notification. The second parameter is the number of bytes
	written.
	
	0:008> g
	Breakpoint 0 hit
	eax=749f1db8 ebx=77db80bc ecx=017d3eb0 edx=74a30908 esi=017d3eb0 edi=00000000
	eip=749fbe09 esp=0269feec ebp=0269ff4c iopl=0         nv up ei pl zr na po nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000246
	asp!CASPDirMonitorEntry__ActOnNotification:
	749fbe09 55               push    ebp
	0:032> kv
	ChildEBP RetAddr  Args to Child              
	0269fee8 6d704302 0000003b 00000000 77e82ef1 asp!CASPDirMonitorEntry__ActOnNotification (FPO: [Non-Fpo])
	0269ff4c 6d70875d 017d3eb0 00000000 0000003b ISATQ!CDirMonitor__DirMonitorCompletionFunction+0xad (FPO: [Non-Fpo])
	0269ff80 6d708a25 0000003b 00000000 017d3ed0 ISATQ!AtqpProcessContext+0x262 (FPO: [Non-Fpo])
	0269ffb4 77e837cd 00000000 6d708735 00f6fc38 ISATQ!AtqPoolThread+0x1a8 (FPO: [EBP 0x0269ffec] [1,4,4])
	0269ffec 00000000 6d70887d 00000000 00000000 KERNEL32!TlsSetValue+0xf0 (FPO: [Non-Fpo])
	0:032> ?3b
	Evaluate expression: 59 = 0000003b
	0:032> * ERROR_UNEXP_NET_ERR              59L
	0:032> *dwStatus = 0x3b (59) dwBytesWritten = 0 (none)
	0:032> *so, apparently the status that it returned is something the RDR considers an error
	
	ISATQ and ASP consider different status codes from the redirector the limit for
	when an item is to be flushed from the cache. ASP requires that the status be
	success and the number of bytes be 0 before it will flush the entire directory
	of files cached. This is because that would require you to flush the Global.asa,
	which would result in termination of all sessions, and the application would
	restart. ISATQ is not as strict when it comes to cached HTM pages.
	
	REFERENCES
	==========
	
	CIFS links:
	
	Common Internet File System
	http://samba.org/cifs/
	
	Implementing CIFS - The Common Internet File System
	http://www.ubiqx.org/cifs/
	
	TCP and UDP Port Assignments: Port Assignments for Well-Known Ports
	http://www.microsoft.com/WINDOWS2000/techinfo/reskit/en/CNET/cnfc_por_ojxf.htm
	
	Paul Leach and Dan Perry, CIFS: A Common Internet File System, in Microsoft
	Interactive Developer, November 1996
	http://www.microsoft.com/mind/1196/cifs.htm
	
	Windows 2000 Network Architecture - Common Internet File System
	http://www.microsoft.com/WINDOWS2000/techinfo/reskit/en/CNET/cnad_arc_endh.htm
	
	Paul J. Leach and Dilip C. Naik, A Common Internet File System (CIFS/1.0)
	Protocol, Preliminary Draft, March 13, 1997
	http://www.ubiqx.org/cifs/rfc-draft/draft-leach-cifs-v1-spec-02.html
	
	Paul J. Leach and Dilip C. Naik, A Common Internet File System (CIFS/1.0)
	Protocol, Preliminary Draft, December 19, 1997
	http://www.alternic.org/drafts/drafts-l-m/draft-leach-cifs-v1-spec-01.txt
	See 4.3.7, "NT_TRANSACT_NOTIFY_CHANGE: Request Change Notification"
	
	Microsoft CIFS ftp Directory
	ftp://ftp.microsoft.com/developr/drg/CIFS/
	
	Common Internet File System (CIFS) WG [Working Group] Resources
	ftp://ftp.microsoft.com/developr/drg/CIFS/cifs.html
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q199072 CIFS or Public SMB Information on Common Internet File System
	
	Samba links
	
	Samba Web pages:
	http://us6.samba.org/samba/samba.html
	
	Samba Vendors list
	http://us6.samba.org/samba/vendors/
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSSIE kbDSupport 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
