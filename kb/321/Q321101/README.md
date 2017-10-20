---
layout: page
title: "Q321101: COMTI Does Not Support EZACICSE Security Exit as Supplied by IBM"
permalink: /kb/321/Q321101/
---

## Q321101: COMTI Does Not Support EZACICSE Security Exit as Supplied by IBM

{% raw %}

	Article: Q321101
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 05-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	COMTI TCP/IP security information that is sent in a transaction request message
	(TRM) is not in a format that is compatible with the default security exit,
	EZACICSE, that is supplied by IBM.
	
	MORE INFORMATION
	================
	
	COMTI TCP/IP security information is sent in the following format:
	
	+------------------------------------+
	| Byte    | Data                     | 
	+------------------------------------+
	| 1 - 4   | Transaction Program Name | 
	+------------------------------------+
	| 5       | '0x6B' (Comma Separator) | 
	+------------------------------------+
	| 6 - 13  | User ID                  | 
	+------------------------------------+
	| 14 - 21 | Password                 | 
	+------------------------------------+
	| 22 - 40 | Program Data             | 
	+------------------------------------+
	
	Microsoft has updated COMTI to support the default IBM-supplied security exit,
	EZACICSE. After you apply the update and add the specified registry entry, COMTI
	TCP/IP security information that is supported by EZACICSE is sent in the
	following format:
	
	+------------------------------------+
	| Byte    | Data                     | 
	+------------------------------------+
	| 1 - 4   | Transaction Program Name | 
	+------------------------------------+
	| 5       | '0x6B' (Comma Separator) | 
	+------------------------------------+
	| 6       | '0x01'                   | 
	+------------------------------------+
	| 7 - 14  | Password                 | 
	+------------------------------------+
	| 15 - 22 | User ID                  | 
	+------------------------------------+
	| 23 - 40 | Program Data             | 
	+------------------------------------+
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	This update requires that you add a registry key so that COMTI can send the
	TCP/IP security information using the IBM format for EZACICSE. To add the
	registry key, follow these steps:
	
	1. Start Registry Editor.
	
	2. Locate and then click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Cedar\Defaults
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: UseIBMTCPSecurityExit
	  Data type: REG_SZ
	  Value data: TRUE
	
	NOTE: The actual data value is not checked, but you must enter a data value.
	
	4. Quit Registry Editor.
	
	A supported feature that modifies the product's default behavior is now available
	from Microsoft, but it is only intended to modify the behavior that is described
	in this article. Apply it only to systems that specifically need it. This
	feature may receive additional testing. Therefore, if your system is not
	severely affected by the lack of this feature, Microsoft recommends that you
	wait for the next Microsoft Host Integration Server 2000 service pack that
	contains this feature.
	
	To obtain this feature immediately, contact Microsoft Product Support Services.
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Version      Size    File name
	  --------------------------------------------------
	  20-Feb-2002  17:32  5.0.0.836    106,768 Trantcp.dll
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Additional query words: unsupported incompatible
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
