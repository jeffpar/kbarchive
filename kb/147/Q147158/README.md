---
layout: page
title: "Q147158: PC DirSync: Imports with Template Information Take Long Time"
permalink: /kb/147/Q147158/
---

## Q147158: PC DirSync: Imports with Template Information Take Long Time

{% raw %}

	Article: Q147158
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Import operations that involve template information can take an excessive amount
	of time.
	
	CAUSE
	=====
	
	When the Import process merges new template information with older information,
	excessive file opens and closes occur. This increases import times for these
	extra network operations. The impact of these opens and closes will vary with
	the network operating system in use, and the extent to which the network client
	will cache file opens and closes.
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name    Version
	  --------------------
	  Import.exe   3.5.24
	
	This hotfix has been posted to the following Internet location as Dirsy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.2.8 through 3.2.19 of
	the Import program (Import.exe) included with Microsoft Mail for PC Networks
	versions 3.2 and 3.5.
	
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
