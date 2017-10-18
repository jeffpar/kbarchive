---
layout: page
title: "Q191499: INFO: Where to Find the Builder Applications' Source Files"
permalink: kb/191/Q191499/
---

## Q191499: INFO: Where to Find the Builder Applications' Source Files

	Article: Q191499
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro for Windows version 6.0 now ships the source code for the Visual
	FoxPro builder applications. The source code for the Visual FoxPro builders is
	contained in a file named Xsource.zip.
	
	NOTE: Microsoft does not support the modifications to the source code of the
	Visual FoxPro builders. Modifications done by the user are at the user's risk
	and constitute no obligations or warranties, either expressed or implied, by
	Microsoft.
	
	MORE INFORMATION
	================
	
	The Xsource.zip file is located in the following folder:
	
	  \VFP98\Tools\XSource folder
	
	How to View the Builder's Source Code
	-------------------------------------
	
	1. Unzip the files in the Xsource.zip file, using the UNZIP -d parameter to
	  preserve subdirectory names. You may select the folder where the Xsource.zip
	  file resides.
	
	2. A subdirectory named \vfpsource is created.
	
	3. Several sub-folders are created and one of them is named "\Builders",
	  (without the quotes) and it contains the following folders and files:
	
	     Directory of \Program Files\Microsoft Visual
	      Studio\Vfp98\Tools\XSource\vfpsource\Builders
	
	       Bldrmain.prg         1,661  05-01-98  1:33p
	       Bregtbl.dbf          1,629  05-01-98  1:33p
	       Bregtbl.fpt          3,696  05-01-98  1:33p
	       Builder.pjt        166,336  05-01-98  1:33p
	       Builder.pjx          8,733  05-01-98  1:33p
	       Builder.prg         13,809  05-01-98  1:33p
	       Cmdbldr.pjt          8,382  05-01-98  1:33p
	       Cmdbldr.pjx          2,753  05-01-98  1:33p
	       Defstyle.dbf           436  05-01-98  1:33p
	       Defstyle.fpt         5,376  05-01-98  1:33p
	       Dummy.prg              520  05-01-98  1:33p
	       Editbldr.pjt         8,547  05-01-98  1:33p
	       Editbldr.pjx         3,013  05-01-98  1:33p
	       Formbldr.pjt       113,454  05-01-98  1:33p
	       Formbldr.pjx         6,263  05-01-98  1:33p
	       Grdstyle.dbf           461  05-01-98  1:33p
	       Grdstyle.fpt         4,096  05-01-98  1:33p
	       Gridbldr.pjt        16,863  05-01-98  1:33p
	       Gridbldr.pjx         3,663  05-01-98  1:33p
	       Listbldr.pjt        16,104  05-01-98  1:33p
	       Listbldr.pjx         3,013  05-01-98  1:33p
	       Readme.txt           2,872  05-01-98  1:33p
	       Ribuildr.pjt       176,583  05-01-98  1:33p
	       Ribuildr.pjx         4,573  05-01-98  1:33p
	       Stylbldr.pjt         8,415  05-01-98  1:33p
	       Stylbldr.pjx         2,753  05-01-98  1:33p
	       Wb.h                 5,069  05-01-98  1:33p
	       Wbgrid.prg           7,462  05-01-98  1:33p
	       Wbmain.prg          44,134  05-01-98  1:33p
	       Wbpick.vct          11,517  05-01-98  1:33p
	       Wbpick.vcx           2,667  05-01-98  1:33p
	       Wizard.dbf           3,343  05-01-98  1:33p
	       Wizard.fpt           8,000  05-01-98  1:33p
	       Wizard.pjt          36,416  05-01-98  1:33p
	       Wizard.pjx           2,753  05-01-98  1:33p
	       Wizard.prg           3,577  05-01-98  1:33p
	       Wregtbl.dbf          3,469  05-01-98  1:33p
	       Wregtbl.fpt          6,204  05-01-98  1:33p
	       Builders       <DIR>        07-15-98 11:03a
	       Cmdbldr        <DIR>        07-15-98 11:03a
	       Editbldr       <DIR>        07-15-98 11:03a
	       Formbldr       <DIR>        07-15-98 11:03a
	       Gridbldr       <DIR>        07-15-98 11:03a
	       Listbldr       <DIR>        07-15-98 11:03a
	       Ribuildr       <DIR>        07-15-98 11:03a
	       Stylbldr       <DIR>        07-15-98 11:03a
	          38 file(s)        718,615 bytes
	
	     Directory of \Program Files\Microsoft Visual
	      Studio\Vfp98\Tools\XSource\vfpsource\Builders\BUILDERS
	
	       1mrpt1.Bmp           7,678  05-01-98  1:33p
	       1mrpt1.Msk           2,162  05-01-98  1:33p
	       1mrpt2.Bmp           7,678  05-01-98  1:33p
	       1mrpt2.Msk           7,678  05-01-98  1:33p
	       Bldcmd.H             1,230  05-01-98  1:33p
	       Bldcombo.H           1,706  05-01-98  1:33p
	       Bldedit.H               40  05-01-98  1:33p
	       Bldform.H              242  05-01-98  1:33p
	       Bldgrid.H            2,270  05-01-98  1:33p
	       Bldlist.H            2,755  05-01-98  1:33p
	       Bldopt.H               993  05-01-98  1:33p
	       Bldstyle.H             399  05-01-98  1:33p
	       Bldtext.H            1,132  05-01-98  1:33p
	       Builder.dbf          1,543  05-01-98  1:33p
	       Builder.fpt          4,288  05-01-98  1:33p
	       Builder.H            2,487  05-01-98  1:33p
	       Builder.vct         99,198  05-01-98  1:33p
	       Builder.vcx          3,975  05-01-98  1:33p
	       Cmbbdcmb.bmp           766  05-01-98  1:33p
	       Cmbbdlst.bmp           766  05-01-98  1:33p
	       Defmasks.cdx         4,608  05-01-98  1:33p
	       Defmasks.dbf         4,041  05-01-98  1:33p
	       Frmbhz1.bmp          1,078  05-01-98  1:33p
	       Frmbvt1.bmp          1,078  05-01-98  1:33p
	       Grdbdsty.bmp         9,334  05-01-98  1:33p
	       Readme.txt           1,609  05-01-98  1:33p
	          26 file(s)        170,734 bytes
	
	     Directory of \Program Files\Microsoft Visual
	      Studio\Vfp98\Tools\XSource\vfpsource\Builders\cmdbldr
	
	       Cmdbldr.vct         76,252  05-01-98  1:33p
	       Cmdbldr.vcx          3,975  05-01-98  1:33p
	       Cmdmain.prg          1,777  05-01-98  1:33p
	           3 file(s)         82,004 bytes
	
	     Directory of \Program Files\Microsoft Visual
	      Studio\Vfp98\Tools\XSource\vfpsource\Builders\editbldr
	
	       Editbldr.vct        66,895  05-01-98  1:33p
	       Editbldr.vcx         5,065  05-01-98  1:33p
	       Editmain.prg         1,783  05-01-98  1:33p
	           3 file(s)         73,743 bytes
	
	     Directory of \Program Files\Microsoft Visual
	      Studio\Vfp98\Tools\XSource\vfpsource\Builders\formbldr
	
	       Formbldr.vct        17,688  05-01-98  1:33p
	       Formbldr.vcx         2,449  05-01-98  1:33p
	       Formmain.prg         1,774  05-01-98  1:33p
	           3 file(s)         21,911 bytes
	
	     Directory of \Program Files\Microsoft Visual
	      Studio\Vfp98\Tools\XSource\vfpsource\Builders\gridbldr
	
	       Gridbldr.vct       151,717  05-01-98  1:33p
	       Gridbldr.vcx         4,956  05-01-98  1:33p
	       Gridmain.prg         1,774  05-01-98  1:33p
	           3 file(s)        158,447 bytes
	
	     Directory of \Program Files\Microsoft Visual
	      Studio\Vfp98\Tools\XSource\vfpsource\Builders\listbldr
	
	       Listbldr.prg         1,763  05-01-98  1:33p
	       Listbldr.vct       126,989  05-01-98  1:33p
	       Listbldr.vcx         5,501  05-01-98  1:33p
	           3 file(s)        134,253 bytes
	
	     Directory of \Program Files\Microsoft Visual
	      Studio\Vfp98\Tools\XSource\vfpsource\Builders\RIBUILDR
	
	       Ribuildr.h           3,107  05-01-98  1:33p
	       Ribuildr.vct        89,100  05-01-98  1:33p
	       Ribuildr.vcx         3,757  05-01-98  1:33p
	       Rimain.prg           1,937  05-01-98  1:33p
	           4 file(s)         97,901 bytes
	
	     Directory of \Program Files\Microsoft Visual
	      Studio\Vfp98\Tools\XSource\vfpsource\Builders\stylbldr
	
	       Stylbldr.vct        34,180  05-01-98  1:33p
	       Stylbldr.vcx         3,539  05-01-98  1:33p
	       Stylmain.prg         1,786  05-01-98  1:33p
	           3 file(s)         39,505 bytes
	
	When opening the projects for the various builders in the \Builders folder, you
	are prompted for the location of files that the Project Manager cannot find.
	Most, if not all, of these files are located in the \XSource\VFPSource\Wizards
	folder that is created when the Xsource.zip file is unzipped. The
	\Wizards\wzcommon and \Wizards\wzcommon\bmps folders contain many of the files
	that the Project Manager cannot locate. You can also look in the related
	subfolder under the \Wizards folder for the builder project that you are opening
	for files that the Project Manager cannot locate. For instance, if you are
	opening the Formbldr.pjx project, the Project Manager may not be able to locate
	the Shadowed.bmp file. Locate this file in the
	\XSource\VFPSource\Wizards\Wzform\bmps folder. Use the Find utility in the
	Windows Explorer if necessary to find missing files if they cannot be located
	easily.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Perry
	Newton, Microsoft Corporation
	
	
	Additional query words: vfp6xsource kbVFp kbVFp600 kbBuilder
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
