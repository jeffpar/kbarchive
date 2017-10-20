---
layout: page
title: "Q96775: DoubleSpace Err Msg: DoubleSpace Did Not Find Any Drives..."
permalink: /kb/096/Q96775/
---

## Q96775: DoubleSpace Err Msg: DoubleSpace Did Not Find Any Drives...

{% raw %}

	Article: Q96775
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for
	commands and file names.
	
	SYMPTOMS
	========
	
	You receive the following error message if you attempt to create a new
	DoubleSpace drive by typing DBLSPACE /COMPRESS on a drive that has more than 512
	megabytes (MB) of data:
	
	  Drive C contains too much data to compress. To compress a drive, it cannot
	  contain more than 512 MB of data.
	
	If you type DBLSPACE under the same conditions, you receive the following error
	message:
	
	  DoubleSpace did not find any drives that can be compressed. To compress a
	  disk, first make sure it is formatted and does not contain over 512 MB of
	  data.
	
	WORKAROUND
	==========
	
	To work around this problem, you can delete unnecessary files so that you have
	less than 512 MB of data or follow the procedure outlined below.
	
	MORE INFORMATION
	================
	
	To work around this problem without reducing the volume of data on your hard
	drive, manually create a new DoubleSpace drive and move data to the new
	compressed drive. Once the uncompressed drive contains less than 512 MB of data,
	you can then compress that drive.
	
	To manually create a new DoubleSpace drive:
	
	1. Copy the DBLSPACE.BIN file from the DOS directory to the root directory. For
	  example, if the DOS directory is on drive C, type the following at the MS-DOS
	  command prompt and then press ENTER:
	
	  " copy c:\dos\dblspace.bin c:\" (without the quotation marks)
	
	2. Set the file attributes on DBLSPACE.BIN to read-only, hidden, and system. To
	  do this, use the ATTRIB command as in the following example:
	
	  " attrib c:\dblspace.bin +r +s +h" (without the quotation marks)
	
	3. Create a DBLSPACE.INI file using the COPY CON command. To do this, type the
	  following at the MS-DOS command prompt and then press ENTER:
	
	  " copy con c:\dblspace.ini" (without the quotation marks)
	
	4. Press ENTER twice.
	
	5. Press CTRL+Z and then press ENTER to close and save the file.
	
	6. Restart your computer by pressing CTRL+ALT+DEL.
	
	7. Run DoubleSpace by typing DBLSPACE at the MS-DOS command prompt and pressing
	  ENTER.
	
	8. From the Tools menu, choose Options.
	
	9. Increase the "Last drive reserved for DoubleSpace's use:" setting five
	  letters. For example, if the current letter for Last Drive Reserved For
	  DoubleSpace's Use is D, increase that setting to I.
	
	10. Press ENTER to save your changes and then press ENTER when you are prompted
	  to "Restart Your Computer Now."
	
	  After the computer has restarted, you should have a complete DBLSPACE.INI
	  file.
	
	11. You can now run DoubleSpace and create a new compressed drive. To do this,
	  type DBLSPACE at the MS-DOS command prompt, press ENTER, and then choose
	  Create New Drive from the Compress menu.
	
	After you create the new DoubleSpace drive, you can move data from your
	uncompressed drive to your new drive. If you reduce the data on the uncompressed
	drive to less than 512 MB, you can run DoubleSpace to compress that drive.
	
	NOTE: If you move Microsoft Windows or Windows-based applications to the new
	drive, adjust your .INI files and run Registration Editor to reflect the new
	drive location of your files. If you move system files or network files to the
	compressed drive, adjust your CONFIG.SYS and AUTOEXEC.BAT file accordingly.
	
	Additional query words: 6.00 6.20 6.21 6.22 DBLSPACE double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
