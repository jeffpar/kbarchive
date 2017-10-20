---
layout: page
title: "Q95419: VFW: Information About TRUEVISION Bravado 16 Capture Board"
permalink: /kb/095/Q95419/
---

## Q95419: VFW: Information About TRUEVISION Bravado 16 Capture Board

{% raw %}

	Article: Q95419
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TRUEVISION Bravado 16 capture board is an expandable multimedia board that
	works in any 16-bit expansion slot. The following is a list of board features:
	
	- Super VGA 16-bit per pixel display adapter (requires that the current video
	  adapter be removed)
	
	- VGA resolution up to 1024 x 768
	
	MORE INFORMATION
	================
	
	The following section describes features and other information that pertains to
	using the TRUEVISION Bravado 16 capture board with Video for Windows.
	
	VIDEO INPUT
	-----------
	
	- Multiple boards supported
	
	- Video windows are displayable up to 800 x 600
	
	- Maximum video size 704 x 490 (NTSC)
	
	- Maximum video size 704 x 512 (PAL)
	
	- 16 MB memory limitation
	
	RUNNING UNDER VIDEO FOR WINDOWS
	-------------------------------
	
	When using the Bravado board under Video for Windows, the board captures live
	video at 15 frames per second at 160 x 120 resolution.
	
	OTHER FRAME SIZES AVAILABLE IN VIDCAP
	-------------------------------------
	
	  40 x  30
	  80 x  60
	 120 x  90
	 160 x 120
	 200 x 150
	 280 x 210
	 320 x 240
	 360 x 240
	 400 x 300
	 440 x 330
	 480 x 360
	 520 x 390
	 560 x 420
	 600 x 450
	 640 x 480
	
	NOTE: Overlay mode is supported under VidCap.
	
	TROUBLESHOOTING
	---------------
	
	The following is a list of common problems with the Bravado board and possible
	solutions.
	
	Computer Does Not Start (Boot)
	------------------------------
	
	- The capture board may not be seated properly into the computer slot.
	
	- If you are using another VGA card, there will be a conflict between the card
	  and the VGA adapter on the Bravado board. Remove the VGA card.
	
	- If you have more than one Bravado board, make sure that there are cascade
	  cables connecting them. If more than one board is being used, the boards must
	  be linked with cascade cables.
	
	Scrambled or Blank Monitor
	--------------------------
	
	- If the Bravado board is inserted into an EISA slot, change the 8/16 bit
	  switch.
	
	- The monitor cable may not be connected.
	
	- Check your monitor switches for Analog RGB 31.5 KHz noninterlaced video
	  input.
	
	Windows Does Not Open
	---------------------
	
	- Check the video driver to ensure that it is a driver that is supported by the
	  Bravado board.
	
	Video Is Monochrome
	-------------------
	
	- Make sure your software setting for the incoming video matches the source.
	  For example, if your computer is set for NTSC, but you are using a PAL
	  source, you will get a monochrome signal (this is also true for S-Video and
	  Composite).
	
	Video Window Is Purple (Should Display Live Video)
	--------------------------------------------------
	
	- Make sure the board settings within the Video for Windows Setup program are
	  correct. The port address must match the actual switch settings on the
	  Bravado board.
	
	Load/Save/Blank
	---------------
	
	- Check for a frame buffer address conflict. The frame buffer address should
	  not be set to an address occupied by system memory.
	
	The TRUEVISION Bravado 16 capture board is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
