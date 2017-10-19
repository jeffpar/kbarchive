---
layout: page
title: "Q305713: &quot;Margins Do Not Fit Page Size&quot; After You Switch Printer Driver"
permalink: /kb/305/Q305713/
---

## Q305713: &quot;Margins Do Not Fit Page Size&quot; After You Switch Printer Driver

	Article: Q305713
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbprint kbtoolkbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a Microsoft Excel 2000 document that has the "Fit To [1] page(s)
	wide by [1] tall" option enabled on the Page tab after you changed the printer
	driver by clicking New Driver on the Advanced tab of the printer properties, you
	may receive the following error message:
	
	  Margins do not fit page size
	
	CAUSE
	=====
	
	When you switch the driver for a printer, the system attempts to merge the
	device mode settings for the old printer driver with the device mode settings
	for the new printer driver. This is to try to preserve the device mode settings
	for the old printer driver so that they can be reinstated if you switch the
	driver back. However, some settings are not supported by some drivers, and this
	approach can lead to inconsistencies.
	
	Excel 2000 interrogates the printer's device mode settings to determine whether
	it should perform its own scaling (relatively slow), or use the printer's
	built-in scaling capabilities (relatively fast). Excel 2000 uses the printer's
	scaling capabilities, if present, as this improves performance.
	
	However, if you switch from a PostScript printer with scaling capabilities, to a
	PCL printer that does not have scaling capabilities, the end result of merging
	the device mode settings is that Excel 2000 concludes that the PCL printer can
	perform its own scaling, when in fact it cannot.
	
	This may cause Excel 2000 to submit a page of data to be printed that is too big
	for the physical page, expecting it to be scaled to fit the page in the printer,
	and this can cause the symptom that is listed in the "Symptoms" section of this
	article to occur.
	
	NOTE: Although this article includes Excel 2000, this problem can occur with
	other programs.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version  Size     File name    Platform
	  -----------------------------------------------------------
	  21-Aug-2001  17:05  0.2.0.0   73,104  Rasdd.dll    Intel 
	  21-Aug-2001  17:05  0.2.0.0   75,536  Rasddui.dll  Intel 
	  21-Aug-2001  16:59  0.2.0.0  129,488  Rasdd.dll    Alpha 
	  21-Aug-2001  17:00  0.2.0.0  140,560  Rasddui.dll  Alpha 
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a or Windows 2000 Service Pack 2.
	
	This hotfix is only applicable when Windows NT 4.0 Version-2 printer drivers are
	in use.
	
	
	
	WORKAROUND
	==========
	
	If you have documents that require a specific printer driver (PCL or
	PostScript), the best solution is to install two printers for the target print
	device. One printer would use the PCL driver, and the other printer would use
	the PostScript driver, and you would then select the appropriate printer when
	you print.
	
	This is a more efficient and effective solution than having a single printer
	driver for the printer and swapping the printer driver from PCL to PostScript as
	required.
	
	However, if your print server architecture precludes this approach, download the
	hotfix that is described in the "Resolution" section of this article.
	
	For pure Windows NT 4.0 installations, install the hotfix on all print servers.
	
	For installations that include Windows 2000 print servers, configure the Windows
	2000 print servers to use only Version-2 (Windows NT 4.0) printer drivers, and
	then install the hotfix on all print servers.
	
	For additional information about how to force Windows 2000 to use Version-2
	printer drivers, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q290874 Windows 2000 Printer Driver Does Not Push Printer Configuration
	  Changes to Windows NT 4.0 Driver
	
	By default, Windows 2000 uses Version-3 (Windows 2000) printer drivers if they
	are available. However, it is not possible to provide a hotfix for this problem
	in the architecture that is used to support Version-3 drivers.
	
	Because of this, if you need to address this problem on Windows 2000 print
	servers and cannot use the preceding workaround, you must force the Windows 2000
	print servers to use Version-2 drivers, and then use the hotfix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbprint kbtool kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
