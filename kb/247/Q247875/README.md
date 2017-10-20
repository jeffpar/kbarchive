---
layout: page
title: "Q247875: XCLN: Mapped Drive Letter Path Changes to UNC Path"
permalink: /kb/247/Q247875/
---

## Q247875: XCLN: Mapped Drive Letter Path Changes to UNC Path

{% raw %}

	Article: Q247875
	Product(s): Microsoft Exchange
	Version(s): 8.04; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.04 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a mapped drive letter in the pathname to a file such as an
	AutoArchive .pst file, the path to the file changes from
	<drive>:\<folder>\Archive.pst to
	\\<Servername>\<Sharename>\Archive.pst. You can see this change when
	you use Browse to locate the file and then click OK.
	
	CAUSE
	=====
	
	The file you are working with is being saved to a distributed file system (Dfs)
	volume. With Dfs, you can create a single directory tree that includes multiple
	file servers and file shares in a group, division, or enterprise.
	
	WORKAROUND
	==========
	
	To work around the issue you can do one of the following:
	
	- To retain the mapped drive letter name, save the file to a non-Dfs volume.
	
	- Do not use the Browse button to locate the folder. Instead, manually type the
	  path name of the location where you want to save the file. For example:
	
	  "g:\<folder>\archive.pst" (without the quotation marks)
	
	
	Additional query words: 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook804
	Version           : :8.04; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
