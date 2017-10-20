---
layout: page
title: "Q216024: Maintenance Mode Setup for BackOffice 4.5"
permalink: /kb/216/Q216024/
---

## Q216024: Maintenance Mode Setup for BackOffice 4.5

{% raw %}

	Article: Q216024
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot run Setup for individual components in BackOffice 4.5 (for example,
	Microsoft SQL Server or Microsoft Exchange Server) using the BackOffice
	interface.
	
	This article lists the location of the Setup files for the various BackOffice
	components.
	
	MORE INFORMATION
	================
	
	For additional information, consult documentation for each of the products.
	
	Product                CD# Folder file location
	-------                --- ---------------------------------
	BackOffice 4.5         1   Setup.exe
	Windows NT             1   %Platform%\Winnt32.exe
	Service Pack 4         1   BkOffice\%Platform%\Sp4setup.exe
	Microsoft Management   1   Mmc\%Platform%\Setupmmc.exe
	Console 1.1	       
	BackOffice Deployment  1   Bkoffice\%Platform%\Dploywiz.exe
	Tool                   
	Internet Explorer 5    1   Ie50\%Platform%\Ie5setup.exe
	SQL 7.0                2   Sql70\%Platform%\Setup\Setupsql.exe
	SQL OLAP Services      2   Sql70\Msolap\Install\Setup.exe
	English Query 7.0      2   Sql70\Mseq\%Platform%\Setup.exe
	Windows Option 4.0     3   Ntoptpak\En\%Platform%\Winnt.srv\Setup.exe
	Proxy 2.0              3   Msp\Setup.exe
	Exchange 5.5           4   Exchsrvr\Server\Setup\%Platform%\Setup.exe
	Exchange SP2           4   Exchsrvr.SP2\Server\Setup\%Platform%\Update.exe
	Exchange Chat          4   Exchsrvr\Chat\Setup\%Platform%\Setup.exe
	Site 3.0               5   SiteSrv\%Platform%\Setup.exe
	Site 3.0 SP2           5   SiteSrv.SP2\%Platform%\Ss3sp2.exe
	Systems Management     6   Sms\Smssetup\Bin\%Platform%\Setup.exe
	Server
	Seagate Crystal        6   Crystal\%Platform%\Setup.exe
	Info 7.0               
	BackOffice Core        6   Bkoffice\%Platform%\AdminSetup.exe
	Components             
	Intranet Kit           6   Bkoffice\%Platform%\Iksetup.exe
	SNA 4.0                7   Sna40\$Platform%\Setup.exe
	Outlook 2000           8   Setup.exe
	
	NOTE: Substitute %Platform% with I386 (x86) or Alpha, depending on the computer
	type.
	
	To initiate Mode Setup, browse the CD-ROM folders of the program you want to
	modify, double-click the file, and then follow the instructions.
	
	Additional query words: sms
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
