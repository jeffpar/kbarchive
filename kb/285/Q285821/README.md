---
layout: page
title: "Q285821: Browser Connections Appear to Stop Responding When Accessing IIS"
permalink: /kb/285/Q285821/
---

## Q285821: Browser Connections Appear to Stop Responding When Accessing IIS

{% raw %}

	Article: Q285821
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, a browser may appear to stop responding (hang) when
	you attempt to connect to an IIS Web server over an SSL connection. However,
	other browsers may be able to connect successfully from a different location
	(for example, a different physical connection than the failing browser). No
	error messages or events occur, and IIS works as expected.
	
	CAUSE
	=====
	
	This problem can occur if the client is on a network that does not allow TCP
	packets above a certain payload (for example, 1,400 bytes) and the Web server is
	trying to send TCP packets that are over this limit (for example, 1,460 bytes).
	This can be caused by a middle-tier device, such as a Load Balancer, when it is
	unable to forward ICMP packets that are destined for the Web server where it
	needs to fragment a packet (or set the packet size smaller) in order to
	successfully transmit it. This causes the Web server to continually send TCP
	Acknowledgements to the client as retransmits; however, these packets never get
	back to the client. This is known as a "black hole" router.
	
	RESOLUTION
	==========
	
	Under usual circumstances, this should be addressed at the router or middle-tier
	device; however, in some cases, this cannot be done and will need to be
	addressed at the Web server itself.
	
	To verify that this is indeed the problem, Microsoft recommends that you issue
	the following ping command to the client that is failing from the Web server:
	
	  "ping 'client IP' -f -l 'payload size'" (without the quotation marks)
	
	It is best to test this with the largest packet size possible (for example, 1,490
	bytes), and then work down to find the largest size that will pass through
	without fragmentation. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q159211 Diagnoses and Treatment of Black Hole Routers
	
	If you need to make a modification for TCP payload, it may be necessary to set
	the Max Transfer Unit (MTU) to a lower value by adding the following registry
	entry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces\Adapter
	  GUID
	  Value = MTU
	  Date = dword: 00000578 (1400 decimal)
	
	In addition, it may be beneficial to implement the following registry parameters
	in place of the one above, so that the payload is modified if TCP
	Acknowledgements go unanswered:
	
	  HKEY_LOCAL_MACHINE \SYSTEM \CurrentControlSet \Services \Tcpip \Parameters\
	
	EnablePMTUBHDetect
	
	  Key: Tcpip\Parameters
	  Value Type: REG_DWORD - Boolean
	  Valid Range: 0,1 (False, True)
	  Default: 0 (False)
	
	EnablePMTUDiscovery
	
	  Key: Tcpip\Parameters
	  Value Type: REG_DWORD - Boolean
	  Valid Range: 0,1 (False, True)
	  Default: 1 (True)
	
	For additional information regarding these registry entries, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q120642 TCP/IP and NBT Configuration Parameters for Windows 2000 or Windows
	  NT
	
	MORE INFORMATION
	================
	
	These same symptoms may occur with non-SSL connections. However, it is much less
	likely because SSL tends to have a larger payload. If you suspect you are having
	this problem with non-SSL connections, use the same procedures described in the
	"Resolution" section of this article, as well as the information in this
	section.
	
	By obtaining a Network trace, you can determine if there is a pattern as to why
	this condition is occurring. To install and run Network Monitor, see:
	
	  Q148942 How to Capture Network Traffic with Network Monitor
	
	By reviewing a Network trace between the Web server and the middleware device
	(Load Balancer), you may be able to determine if there is anything that could
	cause the condition at the client. This is an SSL enabled connection. Therefore,
	all data will be encrypted, but will not be a total loss. The first thing to
	look for is the presence of any TCP retransmits. These are identical packets
	that are sent repeatedly due to no response from the remote connection (client).
	These packets will look similar to the following example:
	
	  
	
	  TCP: .A...., len: 1460, seq:3614110526-3614111986, ack:2344064903, win:17031, src:  443  dst: 1354
	
	There may be four or five (maybe more) of these exact packets that are sent to
	the client without any acknowledgement. This indicates that a TCP retransmit is
	occurring. The next thing to look for is the length of the payload denoted by
	len: <value> (1,460 bytes in the example above). Because all of the other
	data is passing through at much smaller amounts and the only thing retransmitted
	are these larger packets, it indicates that these packets are being dropped,
	most likely at a router or a middle-tier device. This can also be confirmed with
	a trace on the client side to determine if these packets indeed are arriving
	there. If not, a drop condition is occurring somewhere between the client and
	server. By following the steps outlined in the "Resolution" section, you may be
	able to determine the proper size that will pass through successfully.
	
	Additional query words: iis 5 ssl hang
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
