---
layout: page
title: "Q86552: MHS: What the Gateway to MHS Does"
permalink: /kb/086/Q86552/
---

## Q86552: MHS: What the Gateway to MHS Does

{% raw %}

	Article: Q86552
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to MHS will poll a Microsoft "mailbag" for mail
	messages destined for transfer via MHS and create an MHS header from this when
	using MHS version 1.5N. The file is then placed in the
	MHS\MAIL\GATES\<Gateway-name>\IN directory, where the Connectivity Manager
	will pick it up for routing.
	
	For MHS mail destined for Microsoft Mail, the gateway polls the
	MHS\MAIL\GATES\<gateway-name>\OUT subdirectory and transfers the message
	to the appropriate Microsoft Mail user.
	
	There are differences between MHS version 1.5N and MHS version 1.1N in that
	version 1.1N requires messages to be submitted to MHS with a 128- byte binary
	routing envelope and a complete message header. This type of message format is
	known as SMF-64. MHS version 1.5N introduced support for SMF-70, which supports
	a much simpler format: no binary routing envelope is required, just a minimal
	submission header. MHS 1.5 will convert this header to a canonical header. The
	MS Mail gateway submits this canonical header type message when sending mail
	out.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
