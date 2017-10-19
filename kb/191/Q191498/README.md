---
layout: page
title: "Q191498: INFO: Where to Find the Class Browser Source Code Files"
permalink: /kb/191/Q191498/
---

## Q191498: INFO: Where to Find the Class Browser Source Code Files

	Article: Q191498
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro for Windows version 6.0 Help file topic for Customizing the
	Class Browser refers to various properties and methods of the Class Browser that
	are exposed and can be used to customize the Class Browser. The functionality of
	these methods can be modified further if needed by accessing the source code for
	the Class Browser application. New properties can also be added. This source
	code is available in the Xsource.zip file that ships with Visual FoxPro.
	
	NOTE: Microsoft does not support the modification of the Class Browser through
	its source code. Modifications done by the user are at the user's risk and
	constitute no obligations or warranties, either expressed or implied, by
	Microsoft.
	
	MORE INFORMATION
	================
	
	The Xsource.zip file is located in the following folder:
	
	  \VFP98\Tools\XSource
	
	Steps to View the Source Code
	-----------------------------
	
	1. Unzip the files in the Xsource.zip file, using the UNZIP -d parameter to
	  preserve subdirectory names. You may select the folder where the Xsource.zip
	  file resides.
	
	2. A subdirectory named \vfpsource is created.
	
	3. Several sub-folders are created and one of them is named "\Browser", (without
	  the quotes) that contains the following files:
	
	     Directory of \Program Files\Microsoft Visual
	      Studio\Vfp98\Tools\XSource\vfpsource\Browser
	
	       _Add.bmp               322  05-01-98  1:35p
	       _Addall.bmp            322  05-01-98  1:35p
	       _Cancel.bmp          1,318  05-01-98  1:35p
	       _Remall.bmp            322  05-01-98  1:35p
	       _Remove.bmp            322  05-01-98  1:35p
	       _Save.bmp            1,318  05-01-98  1:35p
	       Activdoc.ico           318  05-01-98  1:35p
	       Addclslb.bmp           238  05-01-98  1:35p
	       Addclslb.msk           122  05-01-98  1:35p
	       Addins.bmp             298  05-01-98  1:35p
	       Addins.msk             122  05-01-98  1:35p
	       Addsbcls.bmp           262  05-01-98  1:35p
	       Addsbcls.msk           110  05-01-98  1:35p
	       Apilibra.ico           766  05-01-98  1:35p
	       Apps.ico               766  05-01-98  1:35p
	       Back.bmp               138  05-01-98  1:35p
	       Back.msk               138  05-01-98  1:35p
	       Browser.bmp            238  05-01-98  1:35p
	       Browser.h            8,200  05-01-98  1:35p
	       Browser.ico            766  05-01-98  1:35p
	       Browser.msk            122  05-01-98  1:35p
	       Browser.pjt        189,387  05-01-98  1:35p
	       Browser.pjx         23,163  05-01-98  1:35p
	       Browser.prg        183,905  05-01-98  1:35p
	       Browser.sct        613,336  05-01-98  1:35p
	       Browser.scx          5,611  05-01-98  1:35p
	       Browser.vct        109,610  05-01-98  1:35p
	       Browser.vcx         12,041  05-01-98  1:35p
	       Brwdflt.dbf          2,439  05-01-98  1:35p
	       Brwdflt.fpt            832  05-01-98  1:35p
	       Brwfind.sct          3,199  05-01-98  1:35p
	       Brwfind.scx          1,905  05-01-98  1:35p
	       Brwfind2.sct        19,981  05-01-98  1:35p
	       Brwfind2.scx         3,976  05-01-98  1:35p
	       Brwkywrd.sct        16,770  05-01-98  1:35p
	       Brwkywrd.scx         2,559  05-01-98  1:35p
	       Brwlocat.sct         5,260  05-01-98  1:35p
	       Brwlocat.scx         2,014  05-01-98  1:35p
	       Brwmvrs.h            1,505  05-01-98  1:35p
	       Brwmvrs.vct         29,975  05-01-98  1:35p
	       Brwmvrs.vcx          2,449  05-01-98  1:35p
	       Brwoptns.sct        23,637  05-01-98  1:35p
	       Brwoptns.scx         3,867  05-01-98  1:35p
	       Brwprops.sct        25,105  05-01-98  1:35p
	       Brwprops.scx         3,104  05-01-98  1:35p
	       Brwredef.sct        10,116  05-01-98  1:35p
	       Brwredef.scx         2,232  05-01-98  1:35p
	       Brwrenam.sct         4,097  05-01-98  1:35p
	       Brwrenam.scx         2,123  05-01-98  1:35p
	       Brwstruc.dbf        13,191  05-01-98  1:35p
	       Brwstruc.fpt           512  05-01-98  1:35p
	       Builder.ico            766  05-01-98  1:35p
	       Catalog.ico          1,078  05-01-98  1:35p
	       Catalog2.ico           318  05-01-98  1:35p
	       Cfldr.ico            1,078  05-01-98  1:35p
	       Cfldr2.ico             318  05-01-98  1:35p
	       Cgopncat.sct         1,143  05-01-98  1:35p
	       Cgopncat.scx         1,469  05-01-98  1:35p
	       Checkbx.ico            318  05-01-98  1:35p
	       Classlib.ico         1,078  05-01-98  1:35p
	       Cleanup.bmp            238  05-01-98  1:35p
	       Cleanup.msk            122  05-01-98  1:35p
	       Clibrary.ico         1,078  05-01-98  1:35p
	       Cmdgroup.ico           318  05-01-98  1:35p
	       Code.ico               318  05-01-98  1:35p
	       Cofldr.ico           1,078  05-01-98  1:35p
	       Cofldr2.ico            318  05-01-98  1:35p
	       Combo.ico              318  05-01-98  1:35p
	       Containr.ico           318  05-01-98  1:35p
	       Control.crm             68  05-01-98  1:35p
	       Control.cur            326  05-01-98  1:35p
	       Control.ico            318  05-01-98  1:35p
	       Custom.ico             318  05-01-98  1:35p
	       Data.ico               318  05-01-98  1:35p
	       Database.ico         1,078  05-01-98  1:35p
	       Datagrid.ico           318  05-01-98  1:35p
	       Detlview.bmp           238  05-01-98  1:35p
	       Dfldr.ico            1,078  05-01-98  1:35p
	       Dfldr2.ico             318  05-01-98  1:35p
	       Docobj.ico           1,078  05-01-98  1:35p
	       Docs.ico               318  05-01-98  1:35p
	       Dofldr.ico           1,078  05-01-98  1:35p
	       Dofldr2.ico            318  05-01-98  1:35p
	       Dragcopy.crm            68  05-01-98  1:35p
	       Dragcopy.cur           326  05-01-98  1:35p
	       Dragit.cur             326  05-01-98  1:35p
	       Draglink.cur           326  05-01-98  1:35p
	       Dragmove.crm           326  05-01-98  1:35p
	       Dragmove.cur           326  05-01-98  1:35p
	       Editbox.ico            318  05-01-98  1:35p
	       Explorer.ico         1,078  05-01-98  1:35p
	       Export.bmp             238  05-01-98  1:35p
	       Export.msk             122  05-01-98  1:35p
	       Ffldr.ico            1,078  05-01-98  1:35p
	       Ffldr2.ico             318  05-01-98  1:35p
	       Fields.ico             766  05-01-98  1:35p
	       Find.bmp               238  05-01-98  1:35p
	       Find.msk               122  05-01-98  1:35p
	       Fofldr.ico           1,078  05-01-98  1:35p
	       Fofldr2.ico            318  05-01-98  1:35p
	       Folder.ico           1,078  05-01-98  1:35p
	       Folder2.ico            318  05-01-98  1:35p
	       Formpg.ico             318  05-01-98  1:35p
	       Forms.ico            1,078  05-01-98  1:35p
	       Formset.ico            318  05-01-98  1:35p
	       Forward.bmp            138  05-01-98  1:35p
	       Forward.msk            138  05-01-98  1:35p
	       Freetabl.ico           766  05-01-98  1:35p
	       Frm.ico                318  05-01-98  1:35p
	       Gallery.bmp            238  05-01-98  1:35p
	       Gallery.ico            766  05-01-98  1:35p
	       Gallery.msk            122  05-01-98  1:35p
	       Gallery.pjt          4,389  05-01-98  1:35p
	       Gallery.pjx          1,453  05-01-98  1:35p
	       Gallery.prg            671  05-01-98  1:35p
	       Help.bmp               238  05-01-98  1:35p
	       Help.msk               122  05-01-98  1:35p
	       Hyprlink.ico           318  05-01-98  1:35p
	       Image.ico              318  05-01-98  1:35p
	       Import.bmp             238  05-01-98  1:35p
	       Indexes.ico            766  05-01-98  1:35p
	       Instance.ico         1,078  05-01-98  1:35p
	       Item.ico             1,078  05-01-98  1:35p
	       Labels.ico           1,078  05-01-98  1:35p
	       Lbl.ico                318  05-01-98  1:35p
	       Leaf.bmp               222  05-01-98  1:35p
	       Lgicview.bmp           238  05-01-98  1:35p
	       Line.ico               318  05-01-98  1:35p
	       Listbox.ico            318  05-01-98  1:35p
	       Listview.bmp           238  05-01-98  1:35p
	       Menus.ico              766  05-01-98  1:35p
	       Method.ico             318  05-01-98  1:35p
	       Methodc.ico            318  05-01-98  1:35p
	       Methodh.ico            318  05-01-98  1:35p
	       Nodrop.crm              68  05-01-98  1:35p
	       Nodrop.cur             326  05-01-98  1:35p
	       Oclosed.bmp            222  05-01-98  1:35p
	       Ole.ico                318  05-01-98  1:35p
	       Olebound.ico           318  05-01-98  1:35p
	       Olsbldr.ico            318  05-01-98  1:35p
	       Oopen.bmp              222  05-01-98  1:35p
	       Open.bmp               238  05-01-98  1:35p
	       Open.msk               122  05-01-98  1:35p
	       Openctl2.ico           318  05-01-98  1:35p
	       Openctlg.ico         1,078  05-01-98  1:35p
	       Openfld2.ico           318  05-01-98  1:35p
	       Openfldr.ico         1,078  05-01-98  1:35p
	       Optionb.ico            318  05-01-98  1:35p
	       Optiong.ico            318  05-01-98  1:35p
	       Options.bmp            238  05-01-98  1:35p
	       Options.msk            122  05-01-98  1:35p
	       Other.ico              318  05-01-98  1:35p
	       Othrfile.ico           318  05-01-98  1:35p
	       Pagefrm.ico            318  05-01-98  1:35p
	       Pclsbrw.bmp            238  05-01-98  1:35p
	       Pclsbrw.msk            122  05-01-98  1:35p
	       Pfldr.ico            1,078  05-01-98  1:35p
	       Pfldr2.ico             318  05-01-98  1:35p
	       Pofldr.ico           1,078  05-01-98  1:35p
	       Pofldr2.ico            318  05-01-98  1:35p
	       Programs.ico           766  05-01-98  1:35p
	       Projhook.ico           766  05-01-98  1:35p
	       Prop.ico               318  05-01-98  1:35p
	       Propc.ico              318  05-01-98  1:35p
	       Proph.ico              318  05-01-98  1:35p
	       Pushb.ico              318  05-01-98  1:35p
	       Queries.ico            766  05-01-98  1:35p
	       Readme.txt             166  05-01-98  1:35p
	       Redefine.bmp           238  05-01-98  1:35p
	       Redefine.msk           122  05-01-98  1:35p
	       Refresh.bmp            246  05-01-98  1:35p
	       Refresh.msk            126  05-01-98  1:35p
	       Remotqry.ico           766  05-01-98  1:35p
	       Rename.bmp             238  05-01-98  1:35p
	       Rename.msk             122  05-01-98  1:35p
	       Reports.ico            766  05-01-98  1:35p
	       Runcode.prg          9,874  05-01-98  1:35p
	       Sep.ico                318  05-01-98  1:35p
	       Shape.ico              318  05-01-98  1:35p
	       Shctmenu.vct        10,646  05-01-98  1:35p
	       Shctmenu.vcx         1,359  05-01-98  1:35p
	       Smicview.bmp           238  05-01-98  1:35p
	       Snippets.ico         1,086  05-01-98  1:35p
	       Spinner.ico            318  05-01-98  1:35p
	       Stop.bmp               246  05-01-98  1:35p
	       Stop.msk               126  05-01-98  1:35p
	       Storepro.ico           766  05-01-98  1:35p
	       Supercls.h           1,021  05-01-98  1:35p
	       Supercls.vct        45,080  05-01-98  1:35p
	       Supercls.vcx         3,757  05-01-98  1:35p
	       Table.ico            1,078  05-01-98  1:35p
	       Tables.ico             766  05-01-98  1:35p
	       Text.ico               318  05-01-98  1:35p
	       Textbox.ico            318  05-01-98  1:35p
	       Textfile.ico           766  05-01-98  1:35p
	       Timer.ico              318  05-01-98  1:35p
	       Toolbar.ico            318  05-01-98  1:35p
	       Toolbox.ico            318  05-01-98  1:35p
	       Uplevel.bmp            238  05-01-98  1:35p
	       Uplevel.msk            122  05-01-98  1:35p
	       Vfpscrpt.prg        19,810  05-01-98  1:35p
	       View.bmp               246  05-01-98  1:35p
	       Viewcode.sct           925  05-01-98  1:35p
	       Viewcode.scx         1,469  05-01-98  1:35p
	       Viewcode.vct         8,582  05-01-98  1:35p
	       Viewcode.vcx         1,468  05-01-98  1:35p
	       Web_doc.ico          1,078  05-01-98  1:35p
	       Web_file.ico         1,078  05-01-98  1:35p
	       Web_site.ico         1,078  05-01-98  1:35p
	         209 file(s)      1,513,211 bytes
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Perry
	Newton, Microsoft Corporation
	
	
	Additional query words: vfp6xsource kbVFp kbVFp600 kbXBase kbMiscTools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
