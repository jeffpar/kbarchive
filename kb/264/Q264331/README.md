---
layout: page
title: "Q264331: PC Ext: PC Mail Error Message: &#91;001&#93; Unable to Deliver"
permalink: /kb/264/Q264331/
---

## Q264331: PC Ext: PC Mail Error Message: &#91;001&#93; Unable to Deliver

{% raw %}

	Article: Q264331
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.x,PO2PO
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.x, PO2PO 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message:
	
	  [001] unable to deliver.
	  Missing mailbag when sending to ffapi PO from XCHG
	
	CAUSE
	=====
	
	There is a corrupted Inqueue3 mailbag on the receiving hub post office. External
	is unable to open or write to the inbound mailbag on the hub post office. This
	problem can also be caused by a missing or corrupted outbound mailbag for the
	ffapi post office on the hub Microsoft Mail post office.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Stop all message transfer agents (MTAs) that are running against the affected
	  post office.
	
	2. Use the steps in the following Microsoft Knowledge Base article to reset the
	  inqueue3 key and mbg pair. These files are found in the Mbg and Key
	  subfolders of the Maildata folder and must be reset together.
	
	  Q104279 Creating or Resetting a .KEY and .MBG Pair
	
	Additional query words: mail flow
	
	======================================================================
	Keywords          :  
	Technology        : kbPTProdChange kbMailSearch kbZNotKeyword3 kbMailPCN3xSearch
	Version           : WINDOWS:3.x,PO2PO
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
