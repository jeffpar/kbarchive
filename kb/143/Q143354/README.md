---
layout: page
title: "Q143354: PC Ext Gen: Questions Asked About X.25 and External &#91;Part 1&#93;"
permalink: /kb/143/Q143354/
---

## Q143354: PC Ext Gen: Questions Asked About X.25 and External &#91;Part 1&#93;

{% raw %}

	Article: Q143354
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0a,3.2,3.2a,3.5; :3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0a, 3.2, 3.2a, 3.5 
	- Microsoft Mail Multitasking MTA, version 3.2 
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you set up the Mail External program (EXTERNAL.EXE) computers so that they
	can communicate via X.25, it may require a substantial amount of configuration.
	The following section may answer some of the related questions.
	
	MORE INFORMATION
	================
	
	The following are some of the frequently asked questions related to X.25:
	
	1. Q. What X.25 boards are supported by the Microsoft Mail Gateway to X.400?
	
	  A. The Eicon X.25 board is supported.
	
	
	2. Q. Do I have to run a separate instance of the Mail External program to
	  monitor or use each of the four channels of the Eicon card?
	
	  A. Yes, an instance of External can handle only one X.25 virtual circuit (VC).
	  If there must be two concurrent X.25 sessions, then two X.25 External
	  instances must be configured with the following parameter:
	
	  COMMTYPE=X25<card-type>
	
	3. Q. What is the difference between these terms: virtual channels, virtual
	  circuit (VC), physical channels, logical channels, ports, sessions, logical
	  channel number (LCN), and logical session number (LSN)?
	
	  A. The term virtual channel is confused with virtual circuit. Virtual channels
	  do not exist; instead, it is a physical channel or port. Each Eicon board has
	  one or four ports.
	
	  A physical channel is the physical link provided by the X.25 vendor (for
	  example, Infonet) to communicate with each port.
	
	  A virtual circuit is the logical connection or session. A virtual circuit is
	  the X.25 network layer term. The virtual circuit exists at the time of the
	  communication only.
	
	  The logical channel number (LCN) is the same as the virtual circuit number
	  (VCN) but at the X.25 datalink layer. Each Eicon port can handle up to 99
	  virtual circuits; each of them has its own VCN.
	
	  The logical session number (LSN) is the term used by Eicon to lump the two
	  terms LCN and VCN together; the sessions open over a physical port one at a
	  time.
	
	4. Q. Is the virtual channel number the same thing as X.25 port numbers?
	
	  A. A port (physical channel) is not the same as a virtual circuit (VC). Each
	  Eicon board can have up to four ports; each port can handle up to 99 VCs.
	  Each Eicon card can handle up to 396 VCs through four ports.
	
	5. Q. How can we specify the virtual circuits?
	
	  A. Virtual circuits (VC) cannot be specified, which is the X.25 packet and
	  logical channel number (X.25 datalink layer term). You can only specify the
	  port number (physical channel) and a subaddress number.
	
	  The Eicon card manages which VC and logical channel number (LCN) or logical
	  session number (LSN) will be assigned to the X.25 session. The assigned LCN
	  is transparent to the user and will be reassigned after the VC is dissolved.
	
	6. Q. Do I have to specify the port number? If so, how is this done?
	
	  A. If you have multiple X.25 ports supported on the Eicon card under OS/2,
	  then specify each channel with the parameter:
	
	  X25PortNumber=<n>
	
	  where "n" is the port number, in one of the four External instances running
	  under the OS/2 MMTA. If you do not specify a port number, the card may
	  default to port 1.
	
	  It is recommended that you use the parameter, X25PortNumber, for each
	  instance. You will also need the parameter for the Eicon board:
	
	  CommType=X25Eicon
	
	  In addition, you will need the long X.121 address from the X.25 vendor. The
	  two digit subaddress specifies the originating address of the External
	  program. The two digit subaddress is required for the Eicon boards. For
	  example,
	
	  X25subaddress=<x25originatingaddress>.
	
	7. Q. How do you use each of the virtual circuits (conversations) provided by
	  the X.25 vendor for every port of the Eicon card?
	
	  A. Run a separate instance of External for every virtual circuit. When the
	  first channel is busy, all calls (in or out) will be routed to the second
	  channel, etc. However, to achieve 99 concurrent X.25 connections (virtual
	  circuits), you need 99 instances of the Mail External program. Each instance
	  of the External handles one VC.
	
	8. Q. How do you specify the X.25 destination address and X.25 listen address?
	
	  A. Each physical connection (node or DCE) has an X.25 address associated with
	  it. Specify the node listen address in the EXTERNAL.INI file by the
	  parameter:
	
	  X25subaddress=313023022
	
	  (plus the optional two-digit subaddress), to the MTA computer ID on the local
	  area network (LAN). Enter the listen address from the vendor for example:
	
	  Port=<long X.25 Address>=<InfoNet DCE>
	
	  Specify the destination MTA address in the External-Admin, Setup, and put the
	  address (for example, 313023022) plus any optional two-digit subaddress in
	  the local EXTERNAL.INI file.
	
	For additional information regarding configuring X.25 and the Mail External
	program, please reference the Microsoft Mail for PC Networks "Administrator's
	Guide," Appendix F "X.25 Settings for Mail."
	
	For additional information regarding the configuration of an X.400 gateway using
	X.25, refer to the Microsoft Mail Gateway to X.400 "Administrator's Guide."
	
	Additional query words: 3.00 faq
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300a kbMailPCN350 kbMailMMTA320 kbMailMMTA350NT
	Version           : WINDOWS:3.0a,3.2,3.2a,3.5; :3.2,3.5
	
	=============================================================================
	

{% endraw %}
