---
layout: page
title: "Q146529: WD97: High Network Traffic When You Check Spelling (Novell)"
permalink: /kb/146/Q146529/
---

## Q146529: WD97: High Network Traffic When You Check Spelling (Novell)

{% raw %}

	Article: Q146529
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbproof word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check spelling and grammar in a document that is accessed over a
	network, you may experience heavy network traffic.
	
	CAUSE
	=====
	
	You are accessing the file from a Novell 3.12 server within a token ring
	environment and you have the Check Grammar As You Type option on. This option is
	requesting multiple reads of the document data.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	
	To temporarily work around this problem, you can reduce the amount of network
	traffic by turning off the "Check grammar as you type" option. To do this,
	follow these steps:
	
	1. On the Tools menu, click Options, and then click the Spelling & Grammar
	  tab.
	
	2. Under Grammar, click to clear "Check grammar as you type" check box.
	
	3. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	Additional query words: tables
	
	======================================================================
	Keywords          : kbdta kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
