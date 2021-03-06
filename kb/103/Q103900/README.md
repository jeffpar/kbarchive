---
layout: page
title: "Q103900: PC WRmt Ext: Telebit Modem Poor Throughput w/ 9600 Connection"
permalink: /kb/103/Q103900/
---

## Q103900: PC WRmt Ext: Telebit Modem Poor Throughput w/ 9600 Connection

{% raw %}

	Article: Q103900
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.0a; WINDOWS:2.1,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.0a, 3.2 
	- Microsoft Mail Remote for Windows, version 3.2 
	- Microsoft Mail Remote for MS-DOS, versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of Microsoft Mail Remote for Windows or version 2.1, 3.0, 3.0a,
	or 3.2 of Microsoft Mail for PC Networks, when you transmit a large amount of
	data using a Telebit modem with the Telebit script connecting at 9600 baud,
	throughput is well below that speed.
	
	Upon connection, both modems echo "CONNECT FAST," show that the 1024x8 parameters
	are in use on both sides, and that the bytes received and transmitted are
	incremented in 1024 byte blocks. However, the receiving side is generally about
	8K behind the sending side. As a result, there are long periods where both sides
	are waiting with no additional bytes being transmitted or received. Despite
	these problems, the transmission eventually succeeds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Telebit Trailblazer modem
	using all versions of the Telebit script. We are researching this problem and
	will post new information here in the Knowledge Base as it becomes available.
	
	
	Additional query words: 2.10 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN210 kbMailRemote300DOS kbMailRemote320
	Version           : MS-DOS:3.0,3.0a; WINDOWS:2.1,3.0,3.0a,3.2
	
	=============================================================================
	

{% endraw %}
