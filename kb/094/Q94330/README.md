---
layout: page
title: "Q94330: DoubleSpace Setup Runs in Mono on Some Older 8514/a Cards"
permalink: /kb/094/Q94330/
---

## Q94330: DoubleSpace Setup Runs in Mono on Some Older 8514/a Cards

{% raw %}

	Article: Q94330
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	MS-DOS-based programs run in monochrome on older 8514/a video cards.
	
	CAUSE
	=====
	
	This problem is caused by a design limitation of the original IBM 8514/a video
	cards.
	
	MORE INFORMATION
	================
	
	When you have an 8514/a card installed, it uses the VGA card for pass- through
	video. When you connect your monitor to the 8514/a output jack, the VGA port is
	left empty. Some applications read this open port as a monochrome monitor and
	switch to two-color mode when running VGA. Newer VGA cards default to color when
	the port is open. The same applications run in color on these 8514/a video
	cards.
	
	If you run a Microsoft Diagnostics (MSD) report on one of these machines, you see
	the current mode listed as VGA Monochrome (two color). The only way to get the
	applications to run in color is to plug the monitor into the VGA port while you
	boot the machine so that it initializes as color and then plug the monitor into
	the 8514/a port. VGA mode remains in color until the machine is rebooted. This
	change should be reflected in virtually all the MS-DOS-based applications.
	
	NOTE: This does work on the 8514/a emulator cards because they are the only video
	card in the system and no port is left open.
	
	Additional query words: 6.0 mono monochrome mono-chrome black and white b w amber dblspace 6.20 double space drive dblspace.exe drvspace.exe Western Digital wd DoubleSpace DriveSpace DrvSpace maintenance program he following 8514 Original IBM ATI Ultra Paradise blank
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
