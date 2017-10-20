---
layout: page
title: "Q216229: 64-bit Devices Not Correctly Reported"
permalink: /kb/216/Q216229/
---

## Q216229: 64-bit Devices Not Correctly Reported

{% raw %}

	Article: Q216229
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The system will not boot after adding a 64-bit device, or the new device is not
	seen.
	
	CAUSE
	=====
	
	When the BIOS configures a device, the current settings are reported to the
	system by the HAL. This does not happen for devices with 64-bit Base Address
	Registers, even though the upper 32 bits are zeros.
	
	This causes the system to assign new values for these resources, possibly putting
	them on top of another device, not yet started, but already configured by the
	BIOS.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attibutes or
	later:
	
	  Date      Time    Version      Size    File name   Platform
	  -----------------------------------------------------------
	  08/28/98  04:38p                52,384 Hal.dll       (x86)
	  08/28/98  04:38p                48,768 Hal486c.dll   (x86)
	  08/28/98  04:39p                66,880 Halapic.dll   (x86)
	  08/28/98  04:38p                46,112 Halast.dll    (x86)
	  08/28/98  04:38p                82,624 Halcbus.dll   (x86)
	  08/28/98  04:38p                80,672 Halcbusm.dll  (x86)
	  08/28/98  04:38p                46,848 Halmca.dll    (x86)
	  08/28/98  04:39p                68,960 Halmps.dll    (x86)
	  08/28/98  04:39p                68,000 Halmpsm.dll   (x86)
	  08/13/98  03:36p                79,040 Halncr.dll    (x86)
	  08/28/98  04:38p                40,224 Haloli.dll    (x86)
	  08/28/98  04:38p                56,960 Halsp.dll     (x86)
	  08/28/98  04:39p                40,736 Halwyse7.dll  (x86)
	
	  08/28/98  11:04a                60,928 Hal.dll       (Alpha)
	  08/28/98  11:01a                60,928 Hal0jens.dll  (Alpha)
	  08/28/98  11:01a                84,288 Halalcor.dll  (Alpha)
	  08/28/98  11:02a                84,480 Halalp.dll    (Alpha)
	  08/28/98  11:01a                79,104 Halavant.dll  (Alpha)
	  08/28/98  11:01a                93,056 Haleb164.dll  (Alpha)
	  08/28/98  11:01a                82,720 Haleb64p.dll  (Alpha)
	  08/28/98  11:02a                89,824 Halflex.dll   (Alpha)
	  08/28/98  11:02a                92,384 Halgammp.dll  (Alpha)
	  01/27/98  04:59p                97,824 Hallego.dll   (Alpha)
	  08/28/98  11:01a                88,128 Hallx3.dll    (Alpha)
	  08/28/98  11:01a                82,848 Halmikas.dll  (Alpha)
	  08/28/98  11:01a                74,112 Halnonme.dll  (Alpha)
	  08/28/98  11:01a                99,392 Halpinna.dll  (Alpha)
	  08/28/98  11:01a                73,856 Halqs.dll     (Alpha)
	  08/28/98  11:01a               105,088 Halrawmp.dll  (Alpha)
	  08/28/98  11:01a                88,480 Halsabmp.dll  (Alpha)
	  08/28/98  11:02a                94,400 Haltimbr.dll  (Alpha)
	  08/28/98  11:02a                92,736 Halxl.dll     (Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
