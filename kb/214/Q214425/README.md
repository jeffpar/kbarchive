---
layout: page
title: "Q214425: SMS: NetMon Fails to Recognize HTTP Packets on Alternate Ports"
permalink: /kb/214/Q214425/
---

## Q214425: SMS: NetMon Fails to Recognize HTTP Packets on Alternate Ports

	Article: Q214425
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbNetMon
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network Monitor is preconfigured to parse HTTP packets originating on port 80.
	It will recognize the protocol, and when viewing a packet, Network Monitor can
	break the data up logically into its appropriate components like Request Method,
	User-Agent, and so on.
	
	However, if other ports are used for HTTP, Network Monitor will be unable to
	parse the protocol and will represent HTTP packets as generic TCP packets.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Systems
	Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  
	  +--------------------------------------------------+
	  | Date   | Time   | Size    | File name | Platform | 
	  +--------------------------------------------------+
	  | 1/5/99 | 4:25pm | 217,360 | Tcpip.dll | (X86)    | 
	  +--------------------------------------------------+
	  | 1/5/99 | 4:25pm | 254,736 | Tcpip.dll | (ALPHA)  | 
	  +--------------------------------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install and use the hotfix, perform the following steps:
	
	1. Open the Tcpip.ini file in the
	  <sms_root_directory>\Netmon\<platform>\Parsers directory.
	
	2. In the [TCP_HandoffSet] section, add a <port number> = HTTP line for
	  each additional port used, as in the following example:
	
	       80 = HTTP
	     8080 = HTTP
	
	3. Open the Http.ini file in the
	  <sms_root_directory>\Netmon\<platform>\Parsers directory.
	
	4. In the [PORTS] section, modify the "SrcPorts = " line to include the ports
	  being used, as in the following example:
	
	     SrcPorts = 80, 8080
	
	5. Replace the Tcpip.dll file in the
	  <sms_root_directory>\Netmon\<platform>\Parsers directory with the
	  version obtained from this hotfix.
	
	NOTE: You can perform step 5 automatically by using Hotfix.exe with the provided
	Hotfix.ini file.
	
	This fix applies only to the 32-bit version of Network Monitor.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbNetMon 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
