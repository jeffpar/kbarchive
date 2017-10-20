---
layout: page
title: "Q171748: Back Office Resource Kit Eximwiz Utility Update"
permalink: /kb/171/Q171748/
---

## Q171748: Back Office Resource Kit Eximwiz Utility Update

{% raw %}

	Article: Q171748
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 17-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft BackOffice Resource Kit, Part 2 ISBN 1-57231-534-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Eximwiz utility included with the Microsoft BackOffice Resource Kit volume
	2, ISBN 1-57231-534-2 contained a bug that produced an "expired control" error
	message. This updated version of Eximwiz will correct the problem.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Eximwiz.exe
	  (http://download.microsoft.com/download/exch50/Utility/2.0/NT4ALPHA/EN-US/Eximwiz.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Eximwiz.exe converts Microsoft Exchange Bulk Export format (.csv) files to
	Microsoft Mail import format. After creating the output file, you can use the
	tool to interactively import addresses into a Mail Post Office on the network,
	or you can e-mail the import file to external recipients.
	
	In addition, new functionality enables you to export from Mail, and create a .csv
	file to add Mail recipients as Microsoft Exchange custom recipients.
	
	Eximwiz is useful when directory synchronization between a Microsoft Exchange
	Server implementation and Mail is not a viable option. For example, you are
	trying to populate a trading partner's Mail system with relevant addresses such
	as purchasing agents, from your global address list. Eximwiz can also be used to
	manually perform directory synchronization between a Microsoft Exchange Server
	computer and a foreign mail switch that does not support the Mail Dirsync
	protocol.
	
	MORE INFORMATION
	================
	
	Eximwiz Readme file
	-------------------
	
	'*************************************
	'* Eximwiz README file
	'*
	'* last updated 21-July-1997
	'*************************************
	
	For further information regarding the use of Eximwiz, please refer to the
	"Microsoft BackOffice Resource Kit" volume 2 BackOffice Tools Help file.
	
	Please note that the Eximwiz tool supports the Windows 95 and Windows NT version
	3.51 or later operating systems for x86 platforms only.
	
	Installation Instructions
	-------------------------
	
	The following installation instructions should be used in place of the
	instructions provided by the BackOffice Tools Help file.
	
	  NOTE: If you have already installed a previous version of Eximwiz, you must
	  first uninstall it (using the Add/Remove Programs icon in the Control Panel)
	  before installing the updated version.
	
	1. Download the Eximwiz.exe self-extracting executable to an empty temporary
	  directory (c:\temp\ for example).
	
	2. Run (double-click) Eximwiz.exe in the temporary directory to expand the files
	  needed to install Eximwiz.
	
	3. Run (double-click) the Setup.exe file created by Eximwiz.exe and follow the
	  setup instructions to install Eximwiz.
	
	4. (optional) Delete or archive Eximwiz.exe and delete the temporary files
	  created in the temporary directory.
	
	If you encounter problems with Eximwiz or the Eximwiz setup program, please check
	the Microsoft Press Support Web site at:
	
	  http://mspress.microsoft.com/support/support.htm
	
	Or e-mail mailto:RKINPUT@MICROSOFT.COM.
	
	Bug Fixes
	---------
	
	This version corrects the following problems in the original Eximwiz that was
	shipped with the BackOffice Resource Kit Volume 2:
	
	- "expired control" error message problem
	
	- When "auto creation of the PO" is selected: "Fatal error [54] Server name has
	  not been set"
	
	- When "delete all addresses of the default type" is selected: "Fatal error
	  [27] Alias already exists"
	
	Additional query words: bookbug bork reskit rkit ISBN 1-57231-534-2 rkbook
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	
	=============================================================================
	

{% endraw %}
