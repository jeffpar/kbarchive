---
layout: page
title: "Q162764: Unix FTP Clients Get 1 Line at a Time w/ SNA Server AFTP Gateway"
permalink: /kb/162/Q162764/
---

## Q162764: Unix FTP Clients Get 1 Line at a Time w/ SNA Server AFTP Gateway

{% raw %}

	Article: Q162764
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you issue FTP commands from a Unix computer through the SNA Server FTP-
	AFTP gateway, the Unix screen will display one line at a time. In a multiline
	response from the SNA Server, you must press the Enter key for each successive
	line of text. MS-DOS and Windows clients work fine. The same Unix computer will
	work fine against the Windows NT Server FTP service.
	
	CAUSE
	=====
	
	The following is a sample packet from the SNA Server AFTP Gateway Service. The
	byte sequence "0A 0A" is where the Unix client stops displaying.
	
	00000030                    32 32 30 20 70 65 6C 61 62 30       220.pelab0
	00000040  30 32 20 57 69 6E 64 6F 77 73 20 4E 54 20 46 54 02.Windows.NT.FT
	00000050  50 20 53 65 72 76 65 72 20 28 56 65 72 73 69 6F P.Server.(Versio
	00000060  6E 20 33 2E 35 29 2F 20 41 46 54 50 20 47 61 74 n.3.5)/.AFTP.Gat
	00000070  65 77 61 79 2E 0A 0A 09 45 6E 74 65 72 20 0A 0A eway....Enter...
	00000080  09 09 3C 75 73 65 72 6E 61 6D 65 3E 40 3C 41 46 ..<username>@<AF
	00000090  54 50 20 61 64 64 72 65 73 73 3E 0A 0A 20 09 61 TP.address>....a
	000000A0  74 20 55 73 65 72 20 70 72 6F 6D 70 74 20 74 6F t.User.prompt.to
	000000B0  20 63 6F 6E 6E 65 63 74 20 76 69 61 20 74 68 65 .connect.via.the
	000000C0  20 41 46 54 50 20 47 61 74 65 77 61 79 0A 0A 0D .AFTP.Gateway...
	000000D0  0A                                              .
	
	The SNA Server AFTP Gateway service was not sending a carriage return (0D hex) at
	the end of each line of text.
	
	
	RESOLUTION
	==========
	
	Apply the fix referenced below. A carriage return (/r) was added to the data
	stream at the end of each line of text (along with the newline [/n] for clients
	needing it).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 and
	2.11 Service Pack 1 (SP1).
	
	
	A supported fix is now available for 2.11 sp1, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
