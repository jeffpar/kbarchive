---
layout: page
title: "Q150947: VB 4.0 Setup Fails w/&quot;VB4SETUP.STF Contains NULL Characters&quot;"
permalink: kb/150/Q150947/
---

## Q150947: VB 4.0 Setup Fails w/&quot;VB4SETUP.STF Contains NULL Characters&quot;

	Article: Q150947
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic 4.0 installation procedure creates the file VB4SETUP.LST based
	on the options the user selects. The VB4SETUP.LST file is used during
	installation, and, at a later time, for adding and removing components. Certain
	hardware and software problems and incompatibilities cause bad data to be
	written to this file. The Visual Basic 4.0 setup program fails if it cannot read
	the file, and displays the error message:
	
	  VB4SETUP.LST contains NULL characters
	
	MORE INFORMATION
	================
	
	This behavior is often caused by a faulty or incompatible CD-ROM driver, drive,
	network, or network card. The data written to the temporary VB4SETUP.STF file is
	corrupted. The EXTRACT.EXE utility, used to extract the program files from the
	compressed *.CAB files, requires that all components are 100 percent compatible
	and functioning properly.
	
	Early ATAPI CD-ROM drivers, network and network component problems, and some SCSI
	drivers and components are shown to cause this error.
	
	In most cases, copying the contents of the root and \SETUP directories of the
	Visual Basic 4.0 CD-ROM to a local hard drive and installing the program from
	that drive solves the problem. However, obtaining the updated components from
	the component vendor is recommended whenever possible.
	
	You can obtain the latest CD-ROM or SCSI drivers from the CD-ROM drive or SCSI
	controller vendor. If you are installing from a network, contact the network
	administrator or vendor about possible network problems and hardware or software
	updates.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	
	=============================================================================
	
