---
layout: page
title: "Q191500: INFO: Where to Find the Wizard Applications' Source Files"
permalink: /kb/191/Q191500/
---

## Q191500: INFO: Where to Find the Wizard Applications' Source Files

{% raw %}

	Article: Q191500
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro for Windows version 6.0 now ships the source code for the Visual
	FoxPro wizard applications. The source code for the Visual FoxPro wizards is
	contained in a file named Xsource.zip.
	
	NOTE: Microsoft does not support the modifications to the source code of the
	Visual FoxPro wizards. Modifications by the user are at the user's risk and
	constitute no obligations or warranties, either expressed or implied, by
	Microsoft.
	
	MORE INFORMATION
	================
	
	The Xsource.zip file is located in the following folder:
	
	  \VFP98\Tools\Xsource
	
	Steps to View the Source Code
	-----------------------------
	
	1. Unzip the files in the Xsource.zip file, using the UNZIP -d parameter to
	  preserve subdirectory names. You can select the folder where the Xsource.zip
	  file resides.
	
	2. A subdirectory named \vfpsource is created.
	
	3. Several sub-folders are created and among them is one named "\Wizards".
	
	  NOTE: The sub-folders are dated with the current date of the computer in which
	  they were expanded. Some folders contain a text file with additional
	  documentation for the customization of that wizard.
	
	  The \Wizards sub-folder contains the following sixteen subdirectories:
	
	     Automate     <DIR>        07-15-98 11:03a
	     Wzapp        <DIR>        07-15-98 11:03a
	     Wzcommon     <DIR>        07-15-98 11:03a
	     Wzform       <DIR>        07-15-98 11:03a
	     Wzfoxdoc     <DIR>        07-15-98 11:03a
	     Wzgraph      <DIR>        07-15-98 11:03a
	     Wzimport     <DIR>        07-15-98 11:03a
	     Wzintnet     <DIR>        07-15-98 11:03a
	     Wzmail       <DIR>        07-15-98 11:03a
	     Wzpivot      <DIR>        07-15-98 11:03a
	     Wzquery      <DIR>        07-15-98 11:03a
	     Wzreport     <DIR>        07-15-98 11:03a
	     Wzsample     <DIR>        07-15-98 11:03a
	     Wztable      <DIR>        07-15-98 11:03a
	     Wzupsize     <DIR>        07-15-98 11:03a
	     Wzweb        <DIR>        07-15-98 11:03a
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\automate
	
	     Autgraph.h         4,434  05-01-98  1:33p
	     Autgraph.vct      53,803  05-01-98  1:33p
	     Autgraph.vcx       2,013  05-01-98  1:33p
	     Automate.h         2,682  05-01-98  1:33p
	     Automate.vct      28,894  05-01-98  1:33p
	     Automate.vcx       1,359  05-01-98  1:33p
	     Ddecmd.h           1,738  05-01-98  1:33p
	     Mailmrge.h         6,520  05-01-98  1:33p
	     Mailmrge.vct      50,319  05-01-98  1:33p
	     Mailmrge.vcx       1,359  05-01-98  1:33p
	     Notes.txt          3,581  05-01-98  1:33p
	     Pivtable.h         3,380  05-01-98  1:33p
	     Pivtable.vct      27,501  05-01-98  1:33p
	     Pivtable.vcx       1,359  05-01-98  1:33p
	          14 file(s)        188,942 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzapp
	
	     Appwiz.dbf         1,352  05-01-98  1:34p
	     Appwiz.fpt        18,368  05-01-98  1:34p
	     Appwiz.h              21  05-01-98  1:34p
	     Appwiz.mnt         6,369  05-01-98  1:34p
	     Appwiz.mnx         4,975  05-01-98  1:34p
	     Appwiz.pjt         3,597  05-01-98  1:34p
	     Appwiz.pjx         1,452  05-01-98  1:34p
	     Appwiz.txt         3,007  05-01-98  1:34p
	     Appwiz.vct        28,331  05-01-98  1:34p
	     Appwiz.vcx         4,629  05-01-98  1:34p
	     Foxqstrt.bmp       1,743  05-01-98  1:34p
	     Wzapp.h            4,535  05-01-98  1:34p
	     Wzapp.pjt         67,485  05-01-98  1:34p
	     Wzapp.pjx          5,873  05-01-98  1:34p
	     Wzapp.prg         40,818  05-01-98  1:34p
	     Wzapp.vct         75,180  05-01-98  1:34p
	     Wzapp.vcx          3,648  05-01-98  1:34p
	     Wzastart.prg       1,828  05-01-98  1:34p
	     Bmps         <DIR>        07-15-98 11:03a
	          18 file(s)        273,211 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzapp\bmps
	
	     App1.bmp           9,046  05-01-98  1:34p
	     App2.bmp           9,046  05-01-98  1:34p
	     App3.bmp           9,046  05-01-98  1:34p
	     App4.bmp           9,046  05-01-98  1:34p
	     Appwiz.ico           766  05-01-98  1:34p
	     Empty.bmp            246  05-01-98  1:34p
	     Flag.bmp           9,134  05-01-98  1:34p
	     Flag.msk           2,638  05-01-98  1:34p
	     Forms.bmp            298  05-01-98  1:34p
	     Labels.bmp           298  05-01-98  1:34p
	     Menus.bmp            298  05-01-98  1:34p
	     Other.bmp            310  05-01-98  1:34p
	     Reports.bmp          298  05-01-98  1:34p
	     Run.bmp              238  05-01-98  1:34p
	     Trnsprnt.bmp         630  05-01-98  1:34p
	          15 file(s)         51,338 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzcommon
	
	     Click.prg          1,288  05-01-98  1:34p
	     Keypress.prg       2,625  05-01-98  1:34p
	     Registry.h         2,907  05-01-98  1:34p
	     Registry.vct      35,302  05-01-98  1:34p
	     Registry.vcx       2,231  05-01-98  1:34p
	     Regsamps.prg       1,885  05-01-98  1:34p
	     Scroll.vct        25,856  05-01-98  1:34p
	     Scroll.vcx         2,122  05-01-98  1:34p
	     Therm.vct         23,552  05-01-98  1:34p
	     Therm.vcx          4,629  05-01-98  1:34p
	     Wizard.h           5,643  05-01-98  1:34p
	     Wizard.vct        47,744  05-01-98  1:34p
	     Wizard.vcx         2,885  05-01-98  1:34p
	     Wizbld.h           7,391  05-01-98  1:34p
	     Wizctrl.vct       84,800  05-01-98  1:34p
	     Wizctrl.vcx        6,482  05-01-98  1:34p
	     Wizmover.vct     106,375  05-01-98  1:34p
	     Wizmover.vcx       3,648  05-01-98  1:34p
	     Wizstub.prg          875  05-01-98  1:34p
	     Wzengine.prg      54,916  05-01-98  1:34p
	     Bmps         <DIR>        07-15-98 11:03a
	          20 file(s)        423,156 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzcommon\BMPS
	
	     Add.bmp              322  05-01-98  1:34p
	     Addall.bmp           322  05-01-98  1:34p
	     Dblview.bmp          274  05-01-98  1:34p
	     Dblview.msk          274  05-01-98  1:34p
	     Dbrview.bmp          274  05-01-98  1:34p
	     Dbrview.msk          274  05-01-98  1:34p
	     Dbtable.bmp          274  05-01-98  1:34p
	     Dbtable.msk          274  05-01-98  1:34p
	     Down.bmp             190  05-01-98  1:34p
	     Down.msk             190  05-01-98  1:34p
	     Downd.bmp            190  05-01-98  1:34p
	     Downd.msk            190  05-01-98  1:34p
	     Flag.bmp           9,134  05-01-98  1:34p
	     Flag.msk           2,638  05-01-98  1:34p
	     Left.bmp             190  05-01-98  1:34p
	     Left.msk             190  05-01-98  1:34p
	     Leftd.bmp            190  05-01-98  1:34p
	     Leftd.msk            190  05-01-98  1:34p
	     Newsort.bmp        9,046  05-01-98  1:34p
	     Newsort.msk        2,542  05-01-98  1:34p
	     Opentabl.bmp       9,046  05-01-98  1:34p
	     Opentabl.msk       2,542  05-01-98  1:34p
	     Remall.bmp           322  05-01-98  1:34p
	     Remove.bmp           322  05-01-98  1:34p
	     Right.bmp            190  05-01-98  1:34p
	     Right.msk            190  05-01-98  1:34p
	     Rightd.bmp           190  05-01-98  1:34p
	     Rightd.msk           190  05-01-98  1:34p
	     Sort.bmp           9,046  05-01-98  1:34p
	     Thumb.bmp            190  05-01-98  1:34p
	     Thumb.msk             98  05-01-98  1:34p
	     Up.bmp               190  05-01-98  1:34p
	     Up.msk               190  05-01-98  1:34p
	     Upd.bmp              190  05-01-98  1:34p
	     Upd.msk              190  05-01-98  1:34p
	          35 file(s)         50,254 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzform
	
	     Fixwiz.prg         3,265  05-01-98  1:34p
	     Formwiz.h          7,283  05-01-98  1:34p
	     Formwiz.vct       83,584  05-01-98  1:34p
	     Formwiz.vcx        4,084  05-01-98  1:34p
	     Frmstyl2.dbf       2,059  05-01-98  1:34p
	     Frmstyl2.fpt       1,984  05-01-98  1:34p
	     Styles.dbf         1,964  05-01-98  1:34p
	     Styles.fpt         1,984  05-01-98  1:34p
	     Wizbase.vct       19,200  05-01-98  1:34p
	     Wizbase.vcx        2,013  05-01-98  1:34p
	     Wizbmp.dbf           535  05-01-98  1:34p
	     Wizbmp.fpt         6,464  05-01-98  1:34p
	     Wizbox.vct        11,520  05-01-98  1:34p
	     Wizbox.vcx         3,757  05-01-98  1:34p
	     Wizbtns.vct      162,496  05-01-98  1:34p
	     Wizbtns.vcx        9,752  05-01-98  1:34p
	     Wizchsl.vct        5,786  05-01-98  1:34p
	     Wizchsl.vcx        3,539  05-01-98  1:34p
	     Wizcolor.vct      10,496  05-01-98  1:34p
	     Wizcolor.vcx       3,648  05-01-98  1:34p
	     Wizembss.vct       4,379  05-01-98  1:34p
	     Wizembss.vcx       3,103  05-01-98  1:34p
	     Wizfancy.vct       4,758  05-01-98  1:34p
	     Wizfancy.vcx       3,648  05-01-98  1:34p
	     Wizflax.bmp        9,094  05-01-98  1:34p
	     Wizflax.vct       10,880  05-01-98  1:34p
	     Wizflax.vcx        3,648  05-01-98  1:34p
	     Wizform.prg      103,690  05-01-98  1:34p
	     Wizshdow.vct      10,816  05-01-98  1:34p
	     Wizshdow.vcx       3,648  05-01-98  1:34p
	     Wizstart.prg       2,074  05-01-98  1:34p
	     Wizstnd.vct        3,561  05-01-98  1:34p
	     Wizstnd.vcx        2,558  05-01-98  1:34p
	     Wizstone.bmp      13,354  05-01-98  1:34p
	     Wizstone.vct       8,768  05-01-98  1:34p
	     Wizstone.vcx       3,103  05-01-98  1:34p
	     Wizstyle.vct     201,856  05-01-98  1:34p
	     Wizstyle.vcx      21,960  05-01-98  1:34p
	     Wzform.pjt       114,048  05-01-98  1:34p
	     Wzform.pjx         8,473  05-01-98  1:34p
	     Wzform.txt         1,220  05-01-98  1:34p
	     Bmps      <DIR>           07-15-98 11:03a
	     Stylebmp  <DIR>           07-15-98 11:03a
	     Wizbmps   <DIR>           07-15-98 11:03a
	          41 file(s)        884,052 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzform\BMPS
	
	     1mform1.Bmp        9,046  05-01-98  1:34p
	     1mform1.Msk        2,542  05-01-98  1:34p
	     1mform2.Bmp        9,046  05-01-98  1:34p
	     1mform2.Msk        2,542  05-01-98  1:34p
	     1mform3.Bmp        9,046  05-01-98  1:34p
	     1mform3.Msk        2,542  05-01-98  1:34p
	     1mform4.Bmp        9,046  05-01-98  1:34p
	     1mform4.Msk        2,542  05-01-98  1:34p
	     Bak_sty5.msk       2,542  05-01-98  1:34p
	     Boxed.bmp          9,046  05-01-98  1:34p
	     Boxed.msk          2,542  05-01-98  1:34p
	     Chiseled.bmp       9,046  05-01-98  1:34p
	     Chiseled.msk       2,542  05-01-98  1:34p
	     Colorful.bmp       9,046  05-01-98  1:34p
	     Colorful.msk       2,542  05-01-98  1:34p
	     Contemp.bmp        9,046  05-01-98  1:34p
	     Contemp.msk        2,542  05-01-98  1:34p
	     Elegant.bmp        9,046  05-01-98  1:34p
	     Elegant.msk        2,542  05-01-98  1:34p
	     Embossed.bmp       9,046  05-01-98  1:34p
	     Embossed.msk       2,542  05-01-98  1:34p
	     Fancy.bmp         18,438  05-01-98  1:34p
	     Fancy.msk          2,542  05-01-98  1:34p
	     Flax.bmp           9,046  05-01-98  1:34p
	     Flax.msk           2,542  05-01-98  1:34p
	     Opentabl.bmp       9,046  05-01-98  1:34p
	     Opentabl.msk       2,542  05-01-98  1:34p
	     Profess.bmp        9,046  05-01-98  1:34p
	     Profess.msk        2,542  05-01-98  1:34p
	     Qf_fld.msk         2,542  05-01-98  1:34p
	     Qf_sty1.bmp        9,046  05-01-98  1:34p
	     Qf_sty1.msk        2,542  05-01-98  1:34p
	     Qf_sty2.bmp        9,046  05-01-98  1:34p
	     Qf_sty2.msk        2,542  05-01-98  1:34p
	     Qf_sty3.bmp        9,046  05-01-98  1:34p
	     Qf_sty3.msk        2,542  05-01-98  1:34p
	     Qf_sty4.bmp        9,046  05-01-98  1:34p
	     Qf_sty4.msk        2,542  05-01-98  1:34p
	     Qf_sty5.bmp        9,046  05-01-98  1:34p
	     Qf_sty5.msk        9,046  05-01-98  1:34p
	     Shadowed.bmp       9,046  05-01-98  1:34p
	     Shadowed.msk       2,542  05-01-98  1:34p
	     Sort.bmp           9,046  05-01-98  1:34p
	     Standard.bmp       9,046  05-01-98  1:34p
	     Standard.msk       2,542  05-01-98  1:34p
	     Stone.bmp         18,438  05-01-98  1:34p
	     Stone.msk          2,542  05-01-98  1:34p
	     Table1.bmp         9,046  05-01-98  1:34p
	     Table2.bmp         9,046  05-01-98  1:34p
	     Wzback.bmp           358  05-01-98  1:34p
	     Wzclose.bmp          358  05-01-98  1:34p
	     Wzclose.msk          142  05-01-98  1:34p
	     Wzdelete.bmp         358  05-01-98  1:34p
	     Wzdelete.msk         142  05-01-98  1:34p
	     Wzedit.bmp           358  05-01-98  1:34p
	     Wzedit.msk           142  05-01-98  1:34p
	     Wzend.bmp            358  05-01-98  1:34p
	     Wzlocate.bmp         358  05-01-98  1:34p
	     Wzlocate.msk         142  05-01-98  1:34p
	     Wznew.bmp            358  05-01-98  1:34p
	     Wznew.msk            142  05-01-98  1:34p
	     Wznext.bmp           358  05-01-98  1:34p
	     Wzprint.bmp          358  05-01-98  1:34p
	     Wzprint.msk          142  05-01-98  1:34p
	     Wzsave.bmp           358  05-01-98  1:34p
	     Wzsave.msk           142  05-01-98  1:34p
	     Wztop.bmp            358  05-01-98  1:34p
	     Wzundo.bmp           358  05-01-98  1:34p
	     Wzundo.msk           142  05-01-98  1:34p
	          69 file(s)        317,878 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzform\STYLEBMP
	
	     Form.bmp             238  05-01-98  1:34p
	     Form1.bmp            238  05-01-98  1:34p
	     Form2.bmp            238  05-01-98  1:34p
	     Form3.bmp            238  05-01-98  1:34p
	     Form4.bmp            238  05-01-98  1:34p
	     Form5.bmp            238  05-01-98  1:34p
	     Label1.bmp           238  05-01-98  1:34p
	     Label2.bmp           238  05-01-98  1:34p
	     Label3.bmp           238  05-01-98  1:34p
	     Label4.bmp           238  05-01-98  1:34p
	     Label5.bmp           238  05-01-98  1:34p
	     Layout.bmp           238  05-01-98  1:34p
	     Logic1.bmp           238  05-01-98  1:34p
	     Logic2.bmp           238  05-01-98  1:34p
	     Logic3.bmp           238  05-01-98  1:34p
	     Logic4.bmp           238  05-01-98  1:34p
	     Logic5.bmp           238  05-01-98  1:34p
	     Memo1.bmp            238  05-01-98  1:34p
	     Memo2.bmp            238  05-01-98  1:34p
	     Memo3.bmp            238  05-01-98  1:34p
	     Memo4.bmp            238  05-01-98  1:34p
	     Memo5.bmp            238  05-01-98  1:34p
	     Ole1.bmp             238  05-01-98  1:34p
	     Ole2.bmp             238  05-01-98  1:34p
	     Ole3.bmp             238  05-01-98  1:34p
	     Ole4.bmp             238  05-01-98  1:34p
	     Ole5.bmp             238  05-01-98  1:34p
	     Picbttns.bmp         238  05-01-98  1:34p
	     Searchcl.bmp         238  05-01-98  1:34p
	     Searchfm.bmp         238  05-01-98  1:34p
	     Textbttn.bmp         238  05-01-98  1:34p
	     Txtbox1.bmp          238  05-01-98  1:34p
	     Txtbox2.bmp          238  05-01-98  1:34p
	     Txtbox3.bmp          238  05-01-98  1:34p
	     Txtbox4.bmp          238  05-01-98  1:34p
	     Txtbox5.bmp          238  05-01-98  1:34p
	          36 file(s)          8,568 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzform\WIZBMPS
	
	     Wzback.bmp           358  05-01-98  1:34p
	     Wzclose.bmp          358  05-01-98  1:34p
	     Wzdelete.bmp         358  05-01-98  1:34p
	     Wzedit.bmp           358  05-01-98  1:34p
	     Wzend.bmp            358  05-01-98  1:34p
	     Wzlocate.bmp         358  05-01-98  1:34p
	     Wznew.bmp            358  05-01-98  1:34p
	     Wznext.bmp           358  05-01-98  1:34p
	     Wzprint.bmp          358  05-01-98  1:34p
	     Wzsave.bmp           358  05-01-98  1:34p
	     Wztop.bmp            358  05-01-98  1:34p
	     Wzundo.bmp           358  05-01-98  1:34p
	          12 file(s)          4,296 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzfoxdoc
	
	     Analyzer.pjt      21,496  05-01-98  1:34p
	     Analyzer.pjx       1,843  05-01-98  1:34p
	     Analyzer.prg       8,799  05-01-98  1:34p
	     Fdindent.dbf       2,618  05-01-98  1:34p
	     Fdkeywrd.cdx      20,992  05-01-98  1:34p
	     Fdkeywrd.dbf      55,146  05-01-98  1:34p
	     Jump.MNT           1,256  05-01-98  1:34p
	     Jump.mnx           1,617  05-01-98  1:34p
	     Jump.sct          13,775  05-01-98  1:34p
	     Jump.scx           3,322  05-01-98  1:34p
	     Keywrd.prg         2,694  05-01-98  1:34p
	     Main.prg          11,298  05-01-98  1:34p
	     Matt.prg           1,395  05-01-98  1:34p
	     Wzdummy.prg           61  05-01-98  1:34p
	     Wzformat.vct      33,152  05-01-98  1:34p
	     Wzformat.vcx       5,065  05-01-98  1:34p
	     Wzformt.prg       28,227  05-01-98  1:34p
	     Wzfoxdoc.h         2,735  05-01-98  1:34p
	     Wzfoxdoc.pjt      62,848  05-01-98  1:34p
	     Wzfoxdoc.pjx       4,833  05-01-98  1:34p
	     Bmps         <DIR>        07-15-98 11:03a
	     Fd3fll       <DIR>        07-15-98 11:03a
	          20 file(s)        283,172 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzfoxdoc\BMPS
	
	     Codean1.bmp        9,046  05-01-98  1:34p
	     Codean1.msk        2,542  05-01-98  1:34p
	     Doc1&5.bmp         9,046  05-01-98  1:34p
	     Doc1&5.msk         2,542  05-01-98  1:34p
	     Doc2.bmp           9,046  05-01-98  1:34p
	     Doc2.msk           2,542  05-01-98  1:34p
	     Doc3.bmp           9,046  05-01-98  1:34p
	     Doc3.msk           2,542  05-01-98  1:34p
	     Doc4.bmp           9,046  05-01-98  1:34p
	     Doc4.msk           2,542  05-01-98  1:34p
	          10 file(s)         57,940 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzfoxdoc\FD3FLL
	
	     Cstringz.cpp       4,188  05-01-98  1:34p
	     Cstringz.hpp       1,988  05-01-98  1:34p
	     Fd3.cpp           70,272  05-01-98  1:34p
	     Fd3.h              3,790  05-01-98  1:34p
	     Fd3.mak            8,203  05-01-98  1:34p
	     Fd3.mdp           46,592  05-01-98  1:34p
	     Fd3.rc             2,765  05-01-98  1:34p
	     Makefile             443  05-01-98  1:34p
	     Mssccprj.scc         109  05-01-98  1:34p
	     Resource.h         1,355  05-01-98  1:34p
	     Stdafx.h             299  05-01-98  1:34p
	     Str.cpp            9,254  05-01-98  1:34p
	     Support.cpp       10,036  05-01-98  1:34p
	          13 file(s)        159,294 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzgraph
	
	     Graph.h            1,536  05-01-98  1:34p
	     Graph.vct         53,312  05-01-98  1:34p
	     Graph.vcx          3,648  05-01-98  1:34p
	     Graphwiz.prg       7,199  05-01-98  1:34p
	     Grstart.prg        1,850  05-01-98  1:34p
	     Nodrop.cur           326  05-01-98  1:34p
	     Qbeone.cur           326  05-01-98  1:34p
	     Wizgraph.dbf         119  05-01-98  1:34p
	     Wizgraph.fpt      40,000  05-01-98  1:34p
	     Wzgraph.pjt       47,360  05-01-98  1:34p
	     Wzgraph.pjx        7,693  05-01-98  1:34p
	     Bmps       <DIR>          07-15-98 11:03a
	          11 file(s)        163,369 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzgraph\BMPS
	
	     Garea.bmp          2,314  05-01-98  1:34p
	     Garea3d.bmp        2,314  05-01-98  1:34p
	     Gbar.bmp           2,314  05-01-98  1:34p
	     Gbar3d.bmp         2,314  05-01-98  1:34p
	     Gcol.bmp           2,314  05-01-98  1:34p
	     Gcol3d.bmp         2,314  05-01-98  1:34p
	     Ghilo.bmp          2,314  05-01-98  1:34p
	     Ghilocl.bmp        2,314  05-01-98  1:34p
	     Gline.bmp          2,314  05-01-98  1:34p
	     Gline3d.bmp        2,314  05-01-98  1:34p
	     Gpie.bmp           2,314  05-01-98  1:34p
	     Gpie3d.bmp         2,314  05-01-98  1:34p
	     Graph1.bmp         9,046  05-01-98  1:34p
	     Graph1.msk         2,542  05-01-98  1:34p
	     Graph2.bmp        10,678  05-01-98  1:34p
	     Graph2.msk         2,942  05-01-98  1:34p
	          16 file(s)         52,976 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzimport
	
	     Dummy.prg            217  05-01-98  1:34p
	     Import.h          12,059  05-01-98  1:34p
	     Import.prg           994  05-01-98  1:34p
	     Import.vct       184,768  05-01-98  1:34p
	     Import.vcx        11,060  05-01-98  1:34p
	     Iwproc.prg        51,038  05-01-98  1:34p
	     Wzimport.pjt      75,520  05-01-98  1:34p
	     Wzimport.pjx       7,432  05-01-98  1:34p
	     Bmps         <DIR>        07-15-98 11:03a
	           8 file(s)        343,088 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzimport\BMPS
	
	     Import1.bmp        9,046  05-01-98  1:34p
	     Import1.msk        2,542  05-01-98  1:34p
	     Import1a.bmp       9,046  05-01-98  1:34p
	     Import1a.msk       2,542  05-01-98  1:34p
	     Import1b.bmp       8,974  05-01-98  1:34p
	     Import2e.bmp       9,046  05-01-98  1:34p
	     Import2e.msk       2,542  05-01-98  1:34p
	     Import2n.bmp       9,046  05-01-98  1:34p
	     Import2n.msk       2,542  05-01-98  1:34p
	     Impwiz.bmp         9,046  05-01-98  1:34p
	     Ruler.bmp          1,910  05-01-98  1:34p
	     Ruler.msk          1,910  05-01-98  1:34p
	          12 file(s)         68,192 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzintnet
	
	     Buildis.prg           70  05-01-98  1:34p
	     Buildiw.prg          106  05-01-98  1:34p
	     Copysrvr.prg         305  05-01-98  1:34p
	     Foxsm.gif            762  05-01-98  1:34p
	     Inetwiz.h          5,086  05-01-98  1:34p
	     Inetwiz.vct       37,746  05-01-98  1:34p
	     Inetwiz.vcx        4,302  05-01-98  1:34p
	     Msfox.gif         12,845  05-01-98  1:34p
	     Msfox2.gif        12,845  05-01-98  1:34p
	     Smfox.gif          2,516  05-01-98  1:34p
	     Tempflds.cdx       4,608  05-01-98  1:34p
	     Tempflds.dbf       1,924  05-01-98  1:34p
	     Tempflds.fpt       1,128  05-01-98  1:34p
	     Tempstyl.cdx       7,680  05-01-98  1:34p
	     Tempstyl.dbf         516  05-01-98  1:34p
	     Tempstyl.fpt       3,968  05-01-98  1:34p
	     Wizinet.prg       15,194  05-01-98  1:34p
	     Wizinet.txt        1,998  05-01-98  1:34p
	     Wizstart.prg       2,217  05-01-98  1:34p
	     Wwwpage.pjt       47,497  05-01-98  1:34p
	     Wwwpage.pjx        4,962  05-01-98  1:34p
	     Bmps         <DIR>        07-15-98 11:03a
	     Server       <DIR>        07-15-98 11:03a
	          21 file(s)        168,275 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzintnet\BMPS
	
	     Earth.bmp         47,862  05-01-98  1:34p
	     Earth.ico            766  05-01-98  1:34p
	     Fieldsel.bmp       9,046  05-01-98  1:34p
	     Flag.bmp           9,134  05-01-98  1:34p
	     Flag.msk           2,638  05-01-98  1:34p
	     Retback.bmp        9,046  05-01-98  1:34p
	     Retfield.bmp       9,046  05-01-98  1:34p
	     Retpict.bmp        9,046  05-01-98  1:34p
	     Spintro.bmp       38,966  05-01-98  1:34p
	     Spintro.msk       19,574  05-01-98  1:34p
	     Srchback.bmp       9,046  05-01-98  1:34p
	     Srchfld.bmp        9,046  05-01-98  1:34p
	     Srchpage.bmp       9,046  05-01-98  1:34p
	     Srchpict.bmp       9,046  05-01-98  1:34p
	     Tablesel.bmp       9,046  05-01-98  1:34p
	          15 file(s)        200,354 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzintnet\Server
	
	     Foxsm.gif            762  05-01-98  1:34p
	     Mssccprj.scc         112  05-01-98  1:34p
	     Mycgi.c            6,092  05-01-98  1:34p
	     Net13.ico            766  05-01-98  1:34p
	     Querylog.dbf         392  05-01-98  1:34p
	     Querylog.fpt         512  05-01-98  1:34p
	     Server.pjt        25,587  05-01-98  1:34p
	     Server.pjx         1,973  05-01-98  1:34p
	     Server.prg        33,616  05-01-98  1:34p
	     Server.sct         6,376  05-01-98  1:34p
	     Server.scx         1,905  05-01-98  1:34p
	     Specroot.sct       5,879  05-01-98  1:34p
	     Specroot.scx       2,559  05-01-98  1:34p
	     Start.prg            972  05-01-98  1:34p
	     Vfp.jpg           84,469  05-01-98  1:34p
	     Vfpcgi.exe        55,808  05-01-98  1:34p
	     Vfpcgi.mak         5,956  05-01-98  1:34p
	     Vfpcgi.mdp        39,936  05-01-98  1:34p
	     Vfpcgi.ncb        50,176  05-01-98  1:34p
	          19 file(s)        323,848 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzmail
	
	     Mailmrge.prg      39,801  05-01-98  1:34p
	     Mailui.h           3,014  05-01-98  1:34p
	     Mailwiz.vct       20,672  05-01-98  1:34p
	     Mailwiz.vcx        2,340  05-01-98  1:34p
	     Mergewiz.h           960  05-01-98  1:34p
	     Mergewiz.prg       2,359  05-01-98  1:34p
	     Mrgstart.prg       1,125  05-01-98  1:34p
	     Wzmail.pjt        42,240  05-01-98  1:34p
	     Wzmail.pjx         6,262  05-01-98  1:34p
	     Bmps         <DIR>        07-15-98 11:03a
	           9 file(s)        118,773 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzmail\BMPS
	
	     Mailm1.bmp         9,046  05-01-98  1:34p
	     Mailm1.msk         2,542  05-01-98  1:34p
	     Mailm2.bmp         9,046  05-01-98  1:34p
	     Mailm2.msk         2,542  05-01-98  1:34p
	     Mailm3a.bmp        9,046  05-01-98  1:34p
	     Mailm3a.msk        2,542  05-01-98  1:34p
	     Mailm3b.bmp        9,046  05-01-98  1:34p
	     Mailm3b.msk        2,542  05-01-98  1:34p
	     Mailm4.bmp         9,046  05-01-98  1:34p
	     Mailm4.msk         2,542  05-01-98  1:34p
	          10 file(s)         57,940 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzpivot
	
	     Excel1.sct         7,791  05-01-98  1:34p
	     Excel1.scx         1,578  05-01-98  1:34p
	     Nodrop.cur           326  05-01-98  1:34p
	     Pivot.h            6,436  05-01-98  1:34p
	     Pivot.vct         62,976  05-01-98  1:34p
	     Pivot.vcx          4,738  05-01-98  1:34p
	     Pivotwiz.prg       3,016  05-01-98  1:34p
	     Pivstart.prg       1,272  05-01-98  1:34p
	     Qbeone.cur           326  05-01-98  1:34p
	     Vfpxtab.prg       42,722  05-01-98  1:34p
	     Wzpivot.pjt       48,768  05-01-98  1:34p
	     Wzpivot.pjx        6,262  05-01-98  1:34p
	     Xtab.h             1,360  05-01-98  1:34p
	     Xtabwiz.prg        7,526  05-01-98  1:34p
	     Bmps         <DIR>        07-15-98 11:03a
	          14 file(s)        195,097 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzpivot\BMPS
	
	     Crostab3.bmp       9,046  05-01-98  1:34p
	     Crostab3.msk       2,542  05-01-98  1:34p
	     Pivot2.bmp         9,046  05-01-98  1:34p
	     Pivot2.msk         2,542  05-01-98  1:34p
	           4 file(s)         23,176 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzquery
	
	     Emit.prg          10,744  05-01-98  1:34p
	     Showdd.prg         1,029  05-01-98  1:34p
	     Spreadit.prg       1,541  05-01-98  1:34p
	     Wzquery.h          7,933  05-01-98  1:34p
	     Wzquery.pjt       58,176  05-01-98  1:34p
	     Wzquery.pjx        6,653  05-01-98  1:34p
	     Wzquery.prg        9,349  05-01-98  1:34p
	     Wzquery.vct      174,720  05-01-98  1:34p
	     Wzquery.vcx        8,444  05-01-98  1:34p
	     Bmps         <DIR>        07-15-98 11:03a
	           9 file(s)        278,589 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzquery\BMPS
	
	     Exclaim.bmp        1,030  05-01-98  1:34p
	     Qry1.bmp           9,046  05-01-98  1:34p
	     Qry1.msk           2,542  05-01-98  1:34p
	     Qryfield.bmp       9,046  05-01-98  1:34p
	     Qryfield.msk       2,542  05-01-98  1:34p
	     Qryfilte.bmp       9,046  05-01-98  1:34p
	     Qryfilte.msk       2,542  05-01-98  1:34p
	     Qrygrp.bmp         9,046  05-01-98  1:34p
	     Qrygrp.msk         2,542  05-01-98  1:34p
	     Qrysort.bmp        9,046  05-01-98  1:34p
	     Remoqry1.bmp       9,046  05-01-98  1:34p
	     Remoqry1.msk       2,542  05-01-98  1:34p
	          12 file(s)         68,016 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzreport
	
	     Englbls.dbf        4,975  05-01-98  1:34p
	     Englbls.fpt        7,898  05-01-98  1:34p
	     Grptui.h           3,895  05-01-98  1:34p
	     Lblui.h            5,561  05-01-98  1:34p
	     Metlbls.dbf        2,485  05-01-98  1:34p
	     Metlbls.fpt        4,058  05-01-98  1:34p
	     Mrptui.h           3,986  05-01-98  1:34p
	     Report.prg         2,577  05-01-98  1:34p
	     Rptctrl.vct       36,032  05-01-98  1:34p
	     Rptctrl.vcx        2,776  05-01-98  1:34p
	     Rptengin.h        10,879  05-01-98  1:34p
	     Rptengin.prg     138,554  05-01-98  1:34p
	     Rptpaper.dbf       3,819  05-01-98  1:34p
	     Rptstyle.dbf         611  05-01-98  1:34p
	     Rptstyle.fpt       1,280  05-01-98  1:34p
	     Rptui.h            4,568  05-01-98  1:34p
	     Rptwiz.vct       276,928  05-01-98  1:34p
	     Rptwiz.vcx        15,747  05-01-98  1:34p
	     Wizmod.dbf         2,358  05-01-98  1:34p
	     Wizmod.fpt         8,576  05-01-98  1:34p
	     Wzreport.pjt     126,080  05-01-98  1:34p
	     Wzreport.pjx      12,632  05-01-98  1:34p
	     Bmps         <DIR>        07-15-98 11:03a
	     Styles       <DIR>        07-15-98 11:03a
	          22 file(s)        676,275 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzreport\BMPS
	
	     1mrpt1.bmp         9,046  05-01-98  1:34p
	     1mrpt1.msk         2,542  05-01-98  1:34p
	     1mrpt2.bmp         9,046  05-01-98  1:34p
	     1mrpt2.msk         2,542  05-01-98  1:34p
	     1mrpt3.bmp         9,046  05-01-98  1:34p
	     1mrpt3.msk         2,542  05-01-98  1:34p
	     1mrpt4.bmp         9,046  05-01-98  1:34p
	     1mrpt4.msk         2,542  05-01-98  1:34p
	     Bandrpt.bmp        9,046  05-01-98  1:34p
	     Bandrpt.msk        2,542  05-01-98  1:34p
	     Blank.bmp          9,046  05-01-98  1:34p
	     Caslrpt.bmp        9,046  05-01-98  1:34p
	     Caslrpt.msk        2,542  05-01-98  1:34p
	     Colon.bmp             90  05-01-98  1:34p
	     Comma.bmp             78  05-01-98  1:34p
	     Dash.bmp              70  05-01-98  1:34p
	     Execrpt.bmp        9,046  05-01-98  1:34p
	     Execrpt.msk        2,542  05-01-98  1:34p
	     Grprpt2.bmp        9,046  05-01-98  1:34p
	     Grprpt2.msk        2,542  05-01-98  1:34p
	     Lbl_type.bmp       9,046  05-01-98  1:34p
	     Lbl_type.msk       2,542  05-01-98  1:34p
	     Ledgerpt.bmp       9,046  05-01-98  1:34p
	     Ledgerpt.msk       2,542  05-01-98  1:34p
	     Mcrhoriz.bmp         486  05-01-98  1:34p
	     Mcrhoriz.msk         154  05-01-98  1:34p
	     Mcrpthz1.bmp       9,046  05-01-98  1:34p
	     Mcrpthz1.msk       2,542  05-01-98  1:34p
	     Mcrpthz2.bmp       9,046  05-01-98  1:34p
	     Mcrpthz2.msk       2,542  05-01-98  1:34p
	     Mcrpthz3.bmp       9,046  05-01-98  1:34p
	     Mcrpthz3.msk       2,542  05-01-98  1:34p
	     Mcrptvt1.bmp       9,046  05-01-98  1:34p
	     Mcrptvt1.msk       2,542  05-01-98  1:34p
	     Mcrptvt2.bmp       9,046  05-01-98  1:34p
	     Mcrptvt2.msk       2,542  05-01-98  1:34p
	     Mcrptvt3.bmp       9,046  05-01-98  1:34p
	     Mcrptvt3.msk       2,542  05-01-98  1:34p
	     Mcrvert.bmp          614  05-01-98  1:34p
	     Mcrvert.msk          186  05-01-98  1:34p
	     Newsort.bmp        9,046  05-01-98  1:34p
	     Newsort.msk        2,542  05-01-98  1:34p
	     Opentabl.bmp       9,046  05-01-98  1:34p
	     Opentabl.msk       2,542  05-01-98  1:34p
	     Period.bmp            74  05-01-98  1:34p
	     Presnrpt.bmp       9,046  05-01-98  1:34p
	     Presnrpt.msk       2,542  05-01-98  1:34p
	     R_horiz1.bmp       9,046  05-01-98  1:34p
	     R_horiz1.msk       2,542  05-01-98  1:34p
	     Return.bmp            94  05-01-98  1:34p
	     Rpthoriz.bmp         486  05-01-98  1:34p
	     Rptlabel.bmp       9,046  05-01-98  1:34p
	     Rptlabel.msk       2,542  05-01-98  1:34p
	     Rptvert.bmp          614  05-01-98  1:34p
	     Sort.bmp           9,046  05-01-98  1:34p
	          55 file(s)        264,386 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzreport\STYLES
	
	     Bandedh.frt        3,135  05-01-98  1:35p
	     Bandedh.frx       10,254  05-01-98  1:35p
	     Bandedm.frt        3,465  05-01-98  1:35p
	     Bandedm.frx       10,712  05-01-98  1:35p
	     Bandedv.frt        3,036  05-01-98  1:35p
	     Bandedv.frx        9,109  05-01-98  1:35p
	     Casualh.frt        2,475  05-01-98  1:35p
	     Casualh.frx        9,109  05-01-98  1:35p
	     Casualm.frt        2,640  05-01-98  1:35p
	     Casualm.frx        9,338  05-01-98  1:35p
	     Casualv.frt        2,244  05-01-98  1:35p
	     Casualv.frx        7,964  05-01-98  1:35p
	     Style1h.frt        2,277  05-01-98  1:35p
	     Style1h.frx        8,880  05-01-98  1:35p
	     Style1m.frt        2,442  05-01-98  1:35p
	     Style1m.frx        9,109  05-01-98  1:35p
	     Style1v.frt        2,046  05-01-98  1:35p
	     Style1v.frx        7,735  05-01-98  1:35p
	     Style2h.frt        2,211  05-01-98  1:35p
	     Style2h.frx        9,109  05-01-98  1:35p
	     Style2m.frt        2,442  05-01-98  1:35p
	     Style2m.frx        9,109  05-01-98  1:35p
	     Style2v.frt        2,079  05-01-98  1:35p
	     Style2v.frx        7,964  05-01-98  1:35p
	     Style3h.frt        2,211  05-01-98  1:35p
	     Style3h.frx        8,651  05-01-98  1:35p
	     Style3m.frt        2,409  05-01-98  1:35p
	     Style3m.frx        9,338  05-01-98  1:35p
	     Style3v.frt        1,980  05-01-98  1:35p
	     Style3v.frx        7,735  05-01-98  1:35p
	     Stylelbl.lbt       1,328  05-01-98  1:35p
	     Stylelbl.lbx       4,987  05-01-98  1:35p
	          32 file(s)        177,523 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzsample
	
	     Howto.txt          1,648  05-01-98  1:35p
	     Htmlwiz.h          2,068  05-01-98  1:35p
	     Htmlwiz.prg        6,769  05-01-98  1:35p
	     Htmlwiz.vct       18,606  05-01-98  1:35p
	     Htmlwiz.vcx        2,122  05-01-98  1:35p
	     Htmstart.prg         786  05-01-98  1:35p
	     Sample wizard      4,105  05-01-98  1:35p
	     Wzhtml.pjt        39,930  05-01-98  1:35p
	     Wzhtml.pjx         4,183  05-01-98  1:35p
	     Bmps         <DIR>        07-15-98 11:03a
	           9 file(s)         80,217 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzsample\BMPS
	
	     Newsort.bmp        9,046  05-01-98  1:35p
	     Newsort.msk        2,542  05-01-98  1:35p
	     Opentabl.bmp       9,046  05-01-98  1:35p
	     Opentabl.msk       2,542  05-01-98  1:35p
	           4 file(s)         23,176 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wztable
	
	     Ado.h              1,935  05-01-98  1:35p
	     Adovfp.h           8,919  05-01-98  1:35p
	     Appwiz.dbf         1,352  05-01-98  1:35p
	     Appwiz.fpt        18,368  05-01-98  1:35p
	     Dao.h              1,021  05-01-98  1:35p
	     Relations.vct     30,609  05-01-98  1:35p
	     Relations.vcx      2,776  05-01-98  1:35p
	     Wzdbc.h            4,913  05-01-98  1:35p
	     Wzdbc.pjt         46,563  05-01-98  1:35p
	     Wzdbc.pjx          5,483  05-01-98  1:35p
	     Wzdbc.prg          1,780  05-01-98  1:35p
	     Wzdbc.vct         81,695  05-01-98  1:35p
	     Wzdbc.vcx          5,065  05-01-98  1:35p
	     Wzdbceng.prg      17,150  05-01-98  1:35p
	     Wzdbcs.dbf           392  05-01-98  1:35p
	     Wzflds.cdx         8,192  05-01-98  1:35p
	     Wzflds.dbf        18,065  05-01-98  1:35p
	     Wzformat.dbf       1,654  05-01-98  1:35p
	     Wzftyp.cdx         3,072  05-01-98  1:35p
	     Wzftyp.dbf           660  05-01-98  1:35p
	     Wzmask.dbf         1,216  05-01-98  1:35p
	     Wztable.h          6,576  05-01-98  1:35p
	     Wztable.pjt       46,528  05-01-98  1:35p
	     Wztable.pjx        6,263  05-01-98  1:35p
	     Wztable.prg        1,866  05-01-98  1:35p
	     Wztable.vct      125,367  05-01-98  1:35p
	     Wztable.vcx        6,918  05-01-98  1:35p
	     Wztbleng.prg      10,181  05-01-98  1:35p
	     Wztbls.cdx         3,072  05-01-98  1:35p
	     Wztbls.dbf         1,610  05-01-98  1:35p
	     Wztfld.cdx         9,216  05-01-98  1:35p
	     Wztfld.dbf         8,284  05-01-98  1:35p
	     Bmps         <DIR>        07-15-98 11:03a
	          32 file(s)        486,761 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wztable\BMPS
	
	     Rel1.bmp           9,046  05-01-98  1:35p
	     Rel1.msk           2,542  05-01-98  1:35p
	     Rel2.bmp           9,046  05-01-98  1:35p
	     Rel2.msk           2,542  05-01-98  1:35p
	     Rel3.bmp           9,046  05-01-98  1:35p
	     Rel3.msk           2,542  05-01-98  1:35p
	     Table1.bmp         9,046  05-01-98  1:35p
	     Table1.msk         2,542  05-01-98  1:35p
	     Table1a.bmp        8,974  05-01-98  1:35p
	     Table2.bmp         9,046  05-01-98  1:35p
	     Table2.msk         2,542  05-01-98  1:35p
	     Table3.bmp         9,046  05-01-98  1:35p
	     Table3.msk         2,542  05-01-98  1:35p
	     Table3a.bmp        9,046  05-01-98  1:35p
	     Table3a.msk        2,542  05-01-98  1:35p
	          15 file(s)         90,090 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzupsize
	
	     Alldefs.h         27,140  05-01-98  1:35p
	     Exprmap.cdx        6,144  05-01-98  1:35p
	     Exprmap.dbf        2,709  05-01-98  1:35p
	     Keywords.cdx       9,728  05-01-98  1:35p
	     Keywords.dbf      28,637  05-01-98  1:35p
	     Myctrls.vct      317,248  05-01-98  1:35p
	     Myctrls.vcx       18,581  05-01-98  1:35p
	     Project1.pjt       3,756  05-01-98  1:35p
	     Project1.pjx       1,453  05-01-98  1:35p
	     Typemap.cdx        7,168  05-01-98  1:35p
	     Typemap.dbf        4,582  05-01-98  1:35p
	     Wizjoin.prg        7,109  05-01-98  1:35p
	     Wizstart.prg         675  05-01-98  1:35p
	     Wizusz.prg       244,435  05-01-98  1:35p
	     Wzupsize.pjt     205,516  05-01-98  1:35p
	     Wzupsize.pjx       6,653  05-01-98  1:35p
	     Bmps         <DIR>        07-15-98 11:03a
	     Reports      <DIR>        07-15-98 11:03a
	          16 file(s)        891,534 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzupsize\BMPS
	
	     Exclaim.bmp        1,030  05-01-98  1:35p
	     Upsize.bmp         9,046  05-01-98  1:35p
	     Upsize.msk         2,542  05-01-98  1:35p
	     Upsize1.bmp        9,046  05-01-98  1:35p
	     Upsize1.msk        2,542  05-01-98  1:35p
	     Upsize23.bmp       9,046  05-01-98  1:35p
	     Upsize23.msk       2,542  05-01-98  1:35p
	     Upsize45.bmp       9,046  05-01-98  1:35p
	     Upsize45.msk       2,542  05-01-98  1:35p
	     Upsize6.bmp        9,046  05-01-98  1:35p
	     Upsize6.msk        2,542  05-01-98  1:35p
	     Upsize7.bmp        9,046  05-01-98  1:35p
	     Upsize7.msk        2,542  05-01-98  1:35p
	     Upsize9.bmp        9,046  05-01-98  1:35p
	     Upsize9.msk        2,542  05-01-98  1:35p
	          15 file(s)         82,146 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzupsize\REPORTS
	
	     Rpterrs.frt        2,970  05-01-98  1:35p
	     Rpterrs.frx        8,629  05-01-98  1:35p
	     Rptfield.frt       5,643  05-01-98  1:35p
	     Rptfield.frx      14,147  05-01-98  1:35p
	     Rptindex.frt       3,465  05-01-98  1:35p
	     Rptindex.frx      10,483  05-01-98  1:35p
	     Rptrels.frt        7,491  05-01-98  1:35p
	     Rptrels.frx       12,773  05-01-98  1:35p
	     Rpttable.frt      14,223  05-01-98  1:35p
	     Rpttable.frx      27,658  05-01-98  1:35p
	     Rptviews.frt       3,993  05-01-98  1:35p
	     Rptviews.frx      10,025  05-01-98  1:35p
	          12 file(s)        121,500 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzweb
	
	     Htmstart.prg         784  05-01-98  1:35p
	     Webfiles.dbf       1,646  05-01-98  1:35p
	     Webfiles.fpt     168,832  05-01-98  1:35p
	     Wzweb.h            6,109  05-01-98  1:35p
	     Wzweb.pjt         50,721  05-01-98  1:35p
	     Wzweb.pjx          6,783  05-01-98  1:35p
	     Wzweb.prg         18,648  05-01-98  1:35p
	     Wzweb.vct        116,190  05-01-98  1:35p
	     Wzweb.vcx         12,913  05-01-98  1:35p
	     Bmps         <DIR>        07-15-98 11:03a
	           9 file(s)        382,626 bytes
	
	  Directory of \Program Files\Microsoft Visual
	    Studio\Vfp98\Tools\XSource\vfpsource\wizards\Wzweb\BMPS
	
	     Aqua.bmp             274  05-01-98  1:35p
	     Black.bmp            274  05-01-98  1:35p
	     Blue.bmp             274  05-01-98  1:35p
	     Detailview.bmp     9,046  05-01-98  1:35p
	     Fuchsia.bmp          274  05-01-98  1:35p
	     Gray.bmp             274  05-01-98  1:35p
	     Green.bmp            274  05-01-98  1:35p
	     Lime.bmp             274  05-01-98  1:35p
	     Listview.bmp       9,046  05-01-98  1:35p
	     Maroon.bmp           274  05-01-98  1:35p
	     Navy.bmp             274  05-01-98  1:35p
	     Newsort.bmp        9,046  05-01-98  1:35p
	     Newsort.msk        2,542  05-01-98  1:35p
	     Olive.bmp            274  05-01-98  1:35p
	     Opentabl.bmp       9,046  05-01-98  1:35p
	     Opentabl.msk       2,542  05-01-98  1:35p
	     Purple.bmp           274  05-01-98  1:35p
	     Red.bmp              274  05-01-98  1:35p
	     Silver.bmp           274  05-01-98  1:35p
	     Tabdetail.bmp      9,046  05-01-98  1:35p
	     Tabhier.bmp        9,046  05-01-98  1:35p
	     Tablist.bmp        9,046  05-01-98  1:35p
	     Teal.bmp             274  05-01-98  1:35p
	     Webstyl.bmp        9,046  05-01-98  1:35p
	     White.bmp            274  05-01-98  1:35p
	     Yellow.bmp           274  05-01-98  1:35p
	          26 file(s)         81,836 bytes
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Perry
	Newton, Microsoft Corporation
	
	
	Additional query words: kbVFp kbVFp600 kbwizard
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
