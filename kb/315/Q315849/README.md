---
layout: page
title: "Q315849: Programming Microsoft Windows With C# Comments And Corrections"
permalink: /kb/315/Q315849/
---

## Q315849: Programming Microsoft Windows With C# Comments And Corrections

	Article: Q315849
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinfo kbfix
	Last Modified: 24-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Programming Microsoft Windows With C# ISBN 0-7356-1370-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Programming Microsoft Windows With C#, ISBN
	0-7356-1370-2.
	
	The following topics are covered:
	
	- CD-ROM: New ImageIO.cs And MetafileConvert.cs Files
	
	- Page 4: Creating An Empty Project Only Valid For Visual Studio.Net
	
	- Page 12: Typographical Error
	
	- Page 14: Correction To AddFive Routine
	
	- Page 45: Int16 Should Be Int32
	
	- Pages 116 & 118: SystemColor Should Be SystemColors
	
	- Page 298: OnPage Should Be DoPage
	
	- Page 416: Typographical Error
	
	- Page 515: Correction To Save Method
	
	- Page 770: Single Class Should Be Single Structure
	
	- Pages 779 and 780: Correction To ImageIO.cs Code
	
	- Pages 1112 and 1113: Correction to MetafileConvert.cs Code
	
	- Page 1118: Filename Is Stored As String
	
	MORE INFORMATION
	================
	
	Page 4: Creating An Empty Project Only Valid For Visual Studio.Net
	------------------------------------------------------------------
	
	On page 4, there is a description on how to create an empty project. The option
	of creating an empty project is available with Visual Studio .NET, but not with
	Visual C# .NET Standard Edition.
	
	We have made available a file that allows you to add an empty project in Visual
	C# .Net.
	
	Download and save the file emptypro.exe onto your hard disk, then double-click
	the file to extract the file CSharpExForEmptyProject.vsdir into the \Program
	Files\Microsoft Visual Studio .NET\VC#\CSharpProjects folder.
	
	The following file is available for download from the Microsoft Download Center:
	
	  emptypro.exe
	  (http://download.microsoft.com/download/MSPressPub/emptypro/1.0/NT5XP/EN-US/emptypro.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	CD-ROM: New ImageIO.cs And MetafileConvert.cs Files
	---------------------------------------------------
	
	On the companion CD, files ImageIO.cs (\Code\Dialog Boxes\ImageIO) and
	MetafileConvert.cs (\Code\Metafiles\MetafileConvert) contain errors in their
	code. The files with the corrected code are available now for download.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Code.exe
	  (http://download.microsoft.com/download/MSPressPub/Update/1.0/NT5XP/EN-US/code.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	Page 12: Typographical Error
	----------------------------
	
	There is a typographical error on page 12 in the second-to-the-last paragraph.
	Change:
	"Date types don't need..."
	
	To:
	"Data types don't need..."
	
	
	Page 14: Correction To AddFive Routine
	--------------------------------------
	
	On page 14, in the AddFive routine,
	
	Change:
	"i + 5;"
	
	To:
	"i += 5;"
	
	
	Page 45: Int16 Should Be Int32
	------------------------------
	
	There are two incorrect references to Int16 in the middle of page 45.
	
	Change:
	"is an alias for the Int16 structure."
	
	To:
	"is an alias for the Int32 structure."
	
	Also change:
	"System.Int16 a = 55;"
	
	To:
	"System.Int32 a = 55;"
	
	
	Pages 116 & 118: SystemColor Should Be SystemColors
	---------------------------------------------------
	
	There is an error in the code samples on page 116 and 118. The four instances
	total of "SystemColor" on pages 116 and 118 should be changed to
	"SystemColors".
	
	
	Page 298: OnPage Should Be DoPage
	---------------------------------
	
	There are two typographical errors at the bottom of page 298.
	
	Change:
	"The OnPage method changes..."
	
	To:
	"The DoPage method changes..."
	
	Change:
	"OnPage then switches..."
	
	To:
	"DoPage then switches..."
	
	
	Page 416: Typographical Error
	-----------------------------
	
	There is a typographical error in the middle of page 298.
	
	Change:
	"How the DrawString call interprets ampersands?"
	
	To:
	"How does the DrawString call interpret ampersands?"
	
	
	Page 515: Correction To Save Method
	-----------------------------------
	
	On page 515, in first paragraph under "More on the Image Class", remove:
	
	"The first version of Save in the following list uses the filename extension to
	determine the file Format, but you can be more explicit in the next two
	versions:
	...
	void Save(string strFilename)"
	
	
	Page 770: Single Class Should Be Single Structure
	-------------------------------------------------
	
	There is an incorrect statement in the middle of the third paragraph on page
	770.
	
	Change:
	"The point size has to be converted from a string back to a float using the
	static Parse method of the Single class."
	
	To:
	"The point size has to be converted from a string back to a float using the
	static Parse method of the Single structure."
	
	
	Pages 779 and 780: Correction To ImageIO.cs Code
	------------------------------------------------
	
	On pages 779 and 780, replace the ImageIO.cs code with the following:
	
	  //--------------------------------------
	  // ImageIO.cs <A9> 2001 by Charles Petzold
	  //--------------------------------------
	  using System;
	  using System.Drawing;
	  using System.Drawing.Imaging;
	  using System.IO;
	  using System.Windows.Forms;
	
	  class ImageIO: ImageOpen
	  {
	       MenuItem miSaveAs;
	
	       public new static void Main()
	       {
	            Application.Run(new ImageIO());
	       }
	       public ImageIO()
	       {
	            Text = strProgName = "Image I/O";
	
	            Menu.MenuItems[0].Popup += new EventHandler(MenuFileOnPopup);
	            miSaveAs = new MenuItem("Save &As...");
	            miSaveAs.Click += new EventHandler(MenuFileSaveAsOnClick);
	            Menu.MenuItems[0].MenuItems.Add(miSaveAs);
	       }
	       void MenuFileOnPopup(object obj, EventArgs ea)
	       {
	            miSaveAs.Enabled = (image != null);
	       }
	       void MenuFileSaveAsOnClick(object obj, EventArgs ea)
	       {
	            SaveFileDialog savedlg = new SaveFileDialog();
	
	            savedlg.InitialDirectory = Path.GetDirectoryName(strFileName);
	            savedlg.FileName = Path.GetFileNameWithoutExtension(strFileName);
	            savedlg.AddExtension = true;
	            savedlg.Filter = "Windows Bitmap (*.bmp)|*.bmp|" +
	                             "Graphics Interchange Format (*.gif)|*.gif|" +
	                             "JPEG File Interchange Format (*.jpg)|" +
	                                "*.jpg;*.jpeg;*.jfif|" +
	                             "Portable Network Graphics (*.png)|*.png|" +
	                             "Tagged Imaged File Format (*.tif)|*.tif;*.tiff";
	
	            ImageFormat[] aif = { ImageFormat.Bmp,  ImageFormat.Gif, 
	                                  ImageFormat.Jpeg, ImageFormat.Png, 
	                                  ImageFormat.Tiff };
	
	            if (savedlg.ShowDialog() == DialogResult.OK)
	            {
	                 try
	                 {
	                      image.Save(savedlg.FileName, aif[savedlg.FilterIndex - 1]);
	                 }
	                 catch (Exception exc)
	                 {
	                      MessageBox.Show(exc.Message, Text);
	                      return;
	                 }
	                 strFileName = savedlg.FileName;
	                 Text = strProgName + " - " + Path.GetFileName(strFileName);
	            }
	       }
	  }
	
	
	Pages 1112 and 1113: Correction to MetafileConvert.cs Code
	----------------------------------------------------------
	
	On pages 1112 and 1113, replace the MetafileConvert.cs code with the following:
	
	  //----------------------------------------------
	  // MetafileConvert.cs <A9> 2001 by Charles Petzold
	  //----------------------------------------------
	  using System;
	  using System.Drawing;
	  using System.Drawing.Imaging;
	  using System.IO;              // For Path class
	  using System.Windows.Forms;
	
	  class MetafileConvert: MetafileViewer
	  {
	       public new static void Main()
	       {
	            Application.Run(new MetafileConvert());
	       }
	       public MetafileConvert()
	       {
	            Text = strProgName = "Metafile Convert";
	       }
	       protected override void MenuFileSaveAsOnClick(object obj, EventArgs ea)
	       {
	            SaveFileDialog dlg = new SaveFileDialog();
	
	            if (strFileName != null && strFileName.Length > 0)
	                 dlg.InitialDirectory = Path.GetDirectoryName(strFileName);
	
	            dlg.FileName = Path.GetFileNameWithoutExtension(strFileName);
	            dlg.AddExtension = true;
	            dlg.Filter = "Windows Bitmap (*.bmp)|*.bmp|" +
	                         "Graphics Interchange Format (*.gif)|*.gif|" +
	                         "JPEG File Interchange Format (*.jpg)|" +
	                                "*.jpg;*.jpeg;*.jfif|" +
	                         "Portable Network Graphics (*.png)|*.png|" +
	                         "Tagged Image File Format (*.tif)|*.tif;*.tiff";
	
	            ImageFormat[] aif = { ImageFormat.Bmp,  ImageFormat.Gif, 
	                                  ImageFormat.Jpeg, ImageFormat.Png, 
	                                  ImageFormat.Tiff };
	
	            if (dlg.ShowDialog() == DialogResult.OK)
	            {
	                 Bitmap bm = MetafileToBitmap(mf);
	
	                 try
	                 {
	                      bm.Save(dlg.FileName, aif[dlg.FilterIndex - 1]);
	                      // bm.Save(dlg.FileName);
	                 }
	                 catch (Exception exc)
	                 {
	                      MessageBox.Show(exc.Message, Text);
	                 }
	            }
	       }
	       Bitmap MetafileToBitmap(Metafile mf)
	       {
	            Graphics grfx = CreateGraphics();
	            int cx = (int) (grfx.DpiX * mf.Width  / mf.HorizontalResolution);
	            int cy = (int) (grfx.DpiY * mf.Height / mf.VerticalResolution);
	            Bitmap bm = new Bitmap(cx, cy, grfx);
	            grfx.Dispose();
	
	            grfx = Graphics.FromImage(bm);
	            grfx.DrawImage(mf, 0, 0, cx, cy);
	            grfx.Dispose();
	
	            return bm;
	       }
	  }
	
	
	Page 1118: Filename Is Stored As String
	---------------------------------------
	
	There is an incorrect statement at the bottom of page 1118.
	
	Change:
	"Instead, the filename is stored as a file and the..."
	
	To:
	"Instead, the filename is stored as a string and the..."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DEVBOOK Petzold 0-7356-1370-2
	
	======================================================================
	Keywords          : kbinfo kbfix 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
