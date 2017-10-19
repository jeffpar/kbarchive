---
layout: page
title: "Q174707: XWEB: Changing the Outlook Web Access Virtual Directory"
permalink: /kb/174/Q174707/
---

## Q174707: XWEB: Changing the Outlook Web Access Virtual Directory

	Article: Q174707
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	After you install the Microsoft Exchange Active Server Components, the default
	Internet Information Service (IIS) 4.0 virtual directory for accessing the
	Outlook Web Access (OWA) logon page is set to "/Exchange".
	
	Under certain circumstances, you may need to change this.
	
	MORE INFORMATION
	================
	
	Use the following steps to change the current virtual directory.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: Make copies of all files before making any changes!
	
	1. In the <Exch_dir>\Webdata\Global.asa and
	  <Exch_dir>\Webdata\<Lang>\Constant.inc files, change bstrVirtRoot
	  = "/exchange" to bstrVirtRoot = "/<new_virtual_root>", substituting
	  your new name for "<new_virtual_root>".
	
	  NOTE: Always use lower case for anything that might find its way into a URL.
	
	  IMPORTANT: If you ever change something in the Global.asa file, you must also
	  make a matching change the Constant.inc file. The two files contain some
	  duplicate data that must be kept synchronized.
	
	2. In the following registry key, change the registry setting that the Exchange
	  Filter (Exchfilt.dll) uses:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeWeb\Applications\<key>
	
	  Where <key> currently = Exchange. Change the value <key> to =
	  <new_virtual_root>.
	
	3. In the <Exch_dir>\Webdata\<Lang>\Default.htm file, change
	
	  <META HTTP-EQUIV="REFRESH" CONTENT="0; URL=/exchange/logon.asp">
	
	  to
	
	  <META HTTP-EQUIV="REFRESH" CONTENT="0; URL=/<new_virtual_root>/logon.asp">
	
	  Search the <Exch_dir>\Webdata\<Lang> folder and subfolders for any
	  other *.htm files containing the string "/exchange". Replace the text as
	  above.
	
	4. In the
	  <Exch_dir>\Webdata\<Lang>\Forms\Ipm\Schedule\Meeting\Request\Mrread.asp
	  file, replace all occurrences of "/exchange" with "<%=bstrVirtRoot%>".
	
	  Search the <Exch_dir>\Webdata\<Lang> folder and subfolders for any
	  other *.asp files containing the string "/exchange". Replace the text as
	  above. The Tshoot.asp file may safely be ignored.
	
	5. Using the Internet Service Manager on the IIS 4.0 computer that is configured
	  with OWA, locate the "Default Web Site". Within the Default Web Site, rename
	  the "Exchange" application to the name of your <new_virtual_root>.
	
	After you make this change, you will need to enter
	http://<server>/<new_virtual_root> to access the Outlook Web Access
	logon page.
	
	Also, you can add more keys to the Applications key, and the Exchange Filter will
	do language switching for those virtual roots as well.
	
	NOTE: Whenever you apply an Exchange Server service pack update to the server
	where you have made these changes, you must re-apply all of the changes as
	described in this document after the update.
	
	Additional query words: change directory ASP
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
