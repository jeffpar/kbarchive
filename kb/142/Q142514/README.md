---
layout: page
title: "Q142514: MSB Ocean: ErrMsg: Internal Error XXX Skip Type XXX"
permalink: /kb/142/Q142514/
---

## Q142514: MSB Ocean: ErrMsg: Internal Error XXX Skip Type XXX

{% raw %}

	Article: Q142514
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Magic School Bus Explores the Ocean (MSB Ocean) you may receive the
	one of the following error messages:
	
	  Internal Error 400 (Unknown). Skip Type 0
	
	  Internal Error xxx. Skip Fault 178
	
	The numbers in the error message can vary.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the steps below for your version of Windows:
	
	Windows 95/98
	-------------
	
	1. In Windows Explorer, delete the MSBOcean folder. For more information about
	  how to accomplish this task in Windows, see your Windows printed
	  documentation or online Help.
	
	  By default, the MSBOcean folder is located in the Mskids folder on drive C.
	
	2. Run a diagnostic disk utility, such as ScanDisk, and fix any disk errors.
	
	3. Click Start, point to Settings, and then click Control Panel.
	
	4. Double-click System. Click the Performance tab, click File System, and then
	  click the CD-ROM tab.
	
	5. Set the Supplemental cache size to Large. Set the Optimize access pattern for
	  No Read Ahead. Click OK to close File System properties. Close System
	  properties.
	
	  Windows may prompt you to restart your computer at this point if changes have
	  been made. To restart your computer, click the Restart button and then wait
	  for your computer to restart Windows. Then return to the Control Panel.
	
	6. In Control Panel, double click Multimedia, and then click the Advanced tab.
	
	7. Double-click Media Control Devices. Click the Wave Audio Device (Media
	  Control) option, and then click Properties.
	
	8. Click Settings, drag the slider to maximum (9 seconds), and then click OK.
	  Click OK to close Wave Audio Device (Media Control) properties. Click OK to
	  close Multimedia properties.
	
	9. Reinstall MSB Ocean.
	
	After following these steps, MSB Ocean should run successfully.
	
	Windows 3.x
	-----------
	
	1. In File Manager, delete the MSBOcean folder. By default, the MSBOcean folder
	  is located in the Mskids folder on drive C.
	
	2. On the File menu in Program Manager, click Run.
	
	3. On the Command line, type the following and press ENTER:
	
	  sysedit
	
	4. In the Autoexec.bat file, add a switch to the Smartdrv.exe line to disable
	  CD-ROM caching. For example:
	
	  Smartdrv.exe /u
	
	5. Save the Configuration Editor changes.
	
	6. In Program Manager, open the Control Panel, usually located in the Main
	  program group.
	
	7. Double-click the Drivers icon, and then select MCI Sound. Click Setup and
	  drag the slider to maximum (9 seconds). Click OK to close the MCI Sound
	  Setting window. Click OK to close the Drivers Control Panel.
	
	8. Exit Windows.
	
	9. Run a diagnostic disc utility such as Scandisk and fix any errors.
	
	10. Reset the computer, and restart Windows.
	
	11. Reinstall MSB Ocean.
	
	After following these steps, MSB Ocean should run successfully.
	
	Other Possible Solutions
	------------------------
	
	NOTE: Running a CD audio program in the background can also cause this error.
	Closing the CD audio program can solve this problem.
	
	Additional query words: 1.00 msbhb msbss frizz kbmm multimedia msbocean msbsea frizzle compact disc disk cd-rom winmsbhuman msbhuman
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticOcean kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
