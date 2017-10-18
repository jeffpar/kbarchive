---
layout: page
title: "Q97701: VidEdit: Indeo Supports 24-Bit Color Only"
permalink: kb/097/Q97701/
---

## Q97701: VidEdit: Indeo Supports 24-Bit Color Only

	Article: Q97701
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you change the color depth of a Microsoft Video for Windows AVI file using
	the Intel Indeo compression scheme in VidEdit, attempting to save these changes
	will cause unexpected results.
	
	Specifically, if you choose to change the color depth to 8-bit or 16-bit color,
	these changes will be ignored when saving the edited file. The Intel Indeo
	compression scheme supports 24-bit color only. This is true not only when
	capturing (which is evident by the lack of a color depth option in the Video
	Format dialog box), but also when using the VidEdit utility.
	
	Workaround
	----------
	
	The workaround to convert an AVI file that uses the Intel Indeo compression
	scheme to a color depth other than 24 bit is to apply a different compression
	scheme such as Microsoft Video 1 to the file. It is important to note that this
	will cause a degradation of the quality of the video sequence and prevent the
	use of hardware assisted playback (if the Action Media II board is present in
	the system).
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open an AVI file that utilizes the Intel Indeo compression scheme in VidEdit.
	
	2. From the Video menu, choose Video Format. Note that the current color depth
	  is 24 bit.
	
	3. Change the video format to 8-bit or 16-bit color.
	
	4. From the File menu, choose Save.
	
	5. After the save process is complete, choose the Video Format command under the
	  Video menu. Note that the color depth is still set to 24 bit.
	
	Changes other than color depth that are made to the AVI file will be retained
	however. This includes such attributes as frame rate and audio sampling rate.
	
	A discussion about the Intel Indeo compressor always producing 24-bit sequences
	is documented on page 3-43 of the "Microsoft Video for Windows User's Guide."
	
	Intel Indeo is manufactured by Intel, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 1.00 Indeo Intel
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
