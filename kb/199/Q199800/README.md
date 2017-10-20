---
layout: page
title: "Q199800: PC Ext: How External Picks Up Mail"
permalink: /kb/199/Q199800/
---

## Q199800: PC Ext: How External Picks Up Mail

{% raw %}

	Article: Q199800
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the process that External (message transfer agent [MTA]
	for Microsoft Mail) goes through when picking up mail from a Microsoft Mail
	Postoffice.
	
	First you must have a good understanding of what an .xtn file is. There is one
	.xtn file for each Microsoft Mail Network that your postoffice has access to.
	So, assuming you have networks named Net1 and Net2, you would have an .xtn file
	for each of these. Inside the .xtn file, you find a list of all the postoffices
	in that network.
	
	Each of these networks has a hexadecimal ID assigned to it and the .xtn file is
	named with the hexadecimal ID. To find the hexadecimal ID of a particular
	network, the External program must look in the Network.glb file.
	
	MORE INFORMATION
	================
	
	So, with this basic understanding, the process works as follows: External looks
	into the Network.glb file and gets a list of all .xtn files. It reads the first
	.xtn file in numerical order, then reads the first postoffice mailbag within the
	.xtn file, and performs the following calculation:
	
	  If there are less than 5 messages, deliver now.
	  If there are more than 50 messages, deliver now.
	
	Example 1
	---------
	
	External looks into the Network.glb and finds that Net1 has an XTN value of
	00000001. It then reads that file and finds that Net1 has three postoffices:
	POA, POB, and POC. It reads the hexadecimal ID for the POA mailbag and finds
	there are three messages. It picks up these messages, reads the hexadecimal ID
	for the POB mailbag, and finds there are 10 messages. It leaves those messages
	in that queue, reads the POC mailbag, and finds 15 messages. It then sees that
	it has room to pick up mail from all postoffices, and sends a total of 38
	messages (3+10+15=38). After all messages are sent from this .xtn file, External
	goes to the next .xtn file or gateway definition.
	
	Example 2
	---------
	
	External looks into the Network.glb and finds that Net1 has a hexadecimal ID
	value of 00000001. It then reads that .xtn file and finds Net1 has three
	postoffices POA, POB, and POC. It reads the hexadecimal ID for the POA mailbag
	and finds there are 50 messages. It picks up these messages and ignores the
	other postoffices until the next cycle. After all messages are sent from this
	.xtn file, External goes to the next .xtn file or gateway definition.
	
	Example 3
	---------
	
	External looks into the Network.glb and finds that Net1 has a hexadecimal ID
	value of 00000001. It then reads that .xtn file and finds Net1 has three
	postoffices POA, POB, and POC. It reads the hexadecimal ID for the POA mailbag
	and finds there are seven messages. It ignores these messages and reads
	hexadecimal ID for the POB mailbag, and finds there are four messages. It picks
	these up, reads the hexadecimal ID for the POC mailbag, and finds 75 messages.
	It sees that it has room to pick up 43 of these messages for delivery. External
	then sends a total of 50 messages (7+43=50). After all messages are sent from
	this .xtn file, External goes to the next .xtn file or gateway definition.
	
	Additional query words: delivery MTA External cycle
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
