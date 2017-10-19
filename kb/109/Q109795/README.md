---
layout: page
title: "Q109795: Reinstalling the &quot;Microsoft At Work PC Fax on FAX:&quot; Driver"
permalink: /kb/109/Q109795/
---

## Q109795: Reinstalling the &quot;Microsoft At Work PC Fax on FAX:&quot; Driver

	Article: Q109795
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install a fax modem for Microsoft At Work PC Fax using Control Panel,
	an additional printer driver called "Microsoft At Work PC Fax on FAX:" is
	installed. If you remove this driver using Print Manager or Control Panel, you
	cannot restore it. Reinstalling Microsoft At Work PC Fax does not restore the
	printer driver to the printer driver list.
	
	RESOLUTION
	==========
	
	To reinstall the Microsoft At Work PC Fax printer driver, you must rename the
	EFAXPUMP.INI and MSMAIL.INI files before reinstalling Microsoft At Work PC Fax
	driver. If you delete the Microsoft At Work PC Fax on FAX driver from your hard
	disk (EFAXDRV.DRV), you need to uninstall and reinstall Microsoft At Work PC Fax
	using Windows Setup.
	
	If You Delete Microsoft At Work PC Fax Driver (EFAXDRV.DRV)
	-----------------------------------------------------------
	
	If you delete the Microsoft At Work PC Fax driver (EFAXDRV.DRV) from your hard
	disk, you can use the following procedure to reinstall it:
	
	1. From the Main group, run Windows Setup (WINSETUP.EXE).
	
	2. From the Options menu, choose Add/Remove Windows Components.
	
	3. Choose the Select Files button for Accessories.
	
	4. From the list box on the right, choose Microsoft At Work PC Fax.
	
	5. Choose Remove.
	
	6. Choose OK twice.
	
	7. Choose Yes.
	
	8. From the Options menu, choose Add/Remove Windows Components.
	
	9. Choose the Select Files button for Accessories.
	
	10. From the list box on the left, choose Microsoft At Work PC Fax.
	
	11. Choose Add.
	
	12. Choose OK twice.
	
	13. Follow the procedure in the following section to reinstall the "Microsoft At
	  Work PC Fax on FAX:" printer driver.
	
	If You Remove the "Microsoft At Work PC Fax on FAX:" Printer Driver
	Using Print Manager or Control Panel
	--------------------------------------------------------------------------------------------------------
	
	If you remove the "Microsoft At Work PC Fax on FAX:" printer driver using Print
	Manager or Control Panel, use the following procedure to restore it:
	
	1. Rename EFAXPUMP.INI and MSMAIL.INI to other names. For example, type the
	  following at the MS-DOS command prompt and press ENTER after each line:
	
	  ren c:\windows\efaxpump.ini efaxpump.pss
	  ren c:\windows\msmail.ini msmail.pss
	
	2. Reinstall the fax option from Control Panel.
	
	  The fax print driver settings are restored to the WIN.INI file.
	
	3. Restore the EFAXPUMP.INI and MSMAIL.INI files. For example, type the
	  following at the MS-DOS command prompt and press ENTER after each line:
	
	  copy c:\windows\efaxpump.pss c:\windows\efaxpump.ini copy
	  c:\windows\msmail.pss c:\windows\msmail.ini
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
