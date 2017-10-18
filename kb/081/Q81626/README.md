---
layout: page
title: "Q81626: Complete Removal of a Windows Printer Driver"
permalink: kb/081/Q81626/
---

## Q81626: Complete Removal of a Windows Printer Driver

	Article: Q81626
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To remove all information from your system concerning a specific Windows printer
	driver, do the following:
	
	1. Run Control Panel.
	
	2. Double-click the Printers icon.
	
	3. Select the printer to be removed.
	
	4. Choose the Configure button.
	
	5. Choose the Remove button. This removes the printer from the Installed
	  Printers list.
	
	6. From the File Manager or MS-DOS, delete the driver file (.DRV file)
	  corresponding to the removed printer. Refer to the table below for
	  information on specific printers and their corresponding driver files.
	
	7. Edit the [Windows] section of the WIN.INI file and remove the information
	  following the "Device=" line. (This line contains information about the
	  current default printer). For example, change
	
	  Device=Postscript Printer, Pscript, lpt1:
	
	  to:
	
	  Device=
	
	8. Remove the section of the WIN.INI file that contains information about the
	  specific printer driver. The title of this section contains the name of the
	  printer and the port to which it was initially configured. For example:
	
	  [PostScript,LPT1]
	  device=16
	  feed1=1
	  feed15=1
	  orient=2
	
	9. Exit Windows. Restart Windows.
	
	MORE INFORMATION
	================
	
	The following list contains supported Windows 3.0 printers and their
	corresponding printer driver files.
	
	Printer                                                 Driver File
	-------                                                 -----------
	Generic / Text Only                                     TTY.DRV
	Agfa 9000 Series PS [PostScript Printer]                PSCRIPT.DRV
	Agfa Compugraphic 400PS [PostScript Printer]            PSCRIPT.DRV
	Agfa Compugraphic Genics [PCL / HP LaserJet]            HPPCL.DRV
	Apple LaserWriter [PostScript Printer]                  PSCRIPT.DRV
	Apple LaserWriter II NT/NTX [PostScript Printer]        PSCRIPT.DRV
	Apple LaserWriter Plus [PostScript Printer]             PSCRIPT.DRV
	Apricot Laser [PCL / HP LaserJet]                       HPPCL.DRV
	AST TurboLaser/PS - R4081 [PostScript Printer]          PSCRIPT.DRV
	AT&T 435                                                HPPLOT.DRV
	AT&T 470/475                                            CITOH.DRV
	AT&T 473/478                                            IBMGRX.DRV
	C-Itoh 8510                                             CITOH.DRV
	Canon LBP-8II                                           LBP8II.DRV
	Canon LBP-8III/LBP-4                                    CANONIII.DRV
	Dataproducts LZR-2665 [PostScript Printer]              PSCRIPT.DRV
	Digital LN03R ScriptPrinter [PostScript Printer]        PSCRIPT.DRV
	Digital LPS PrintServer 40 [PostScript Printer]         PSCRIPT.DRV
	Epson DFX-5000 [Epson 9 pin]                            EPSON9.DRV
	Epson EPL-6000 [PCL / HP LaserJet]                      HPPCL.DRV
	Epson EX-800/1000 [Epson 9 pin]                         EPSON9.DRV
	Epson FX-100 [Epson 9 pin]                              EPSON9.DRV
	Epson FX-100+ [Epson 9 pin]                             EPSON9.DRV
	Epson FX-185/286 [Epson 9 pin]                          EPSON9.DRV
	Epson FX-80 [Epson 9 pin]                               EPSON9.DRV
	Epson FX-80+ [Epson 9 pin]                              EPSON9.DRV
	Epson FX-85 [Epson 9 pin]                               EPSON9.DRV
	Epson FX-86e/286e [Epson 9 pin]                         EPSON9.DRV
	Epson FX-850/1050 [Epson 9 pin]                         EPSON9.DRV
	Epson GQ-3500 [PCL / HP LaserJet]                       HPPCL.DRV
	Epson JX-80 [Epson 9 pin]                               EPSON9.DRV
	Epson L-750/1000 [Epson 24 pin]                         EPSON24.DRV
	Epson LQ-500/510 [Epson 24 pin]                         EPSON24.DRV
	Epson LQ-800/1000 [Epson 24 pin]                        EPSON24.DRV
	Epson LQ-850/950/1050 [Epson 24 pin]                    EPSON24.DRV
	Epson LQ-1500 [Epson 24 pin]                            EPSON24.DRV
	Epson LQ-2500/2550 [Epson 24 pin]                       EPSON24.DRV
	Epson LX-80 [Epson 9 pin]                               EPSON9.DRV
	Epson LX-86 [Epson 9 pin]                               EPSON9.DRV
	Epson LX-800/810 [Epson 9 pin]                          EPSON9.DRV
	Epson MX-100 [Epson 9 pin]                              EPSON9.DRV
	Epson MX-80/80F/T [Epson 9 pin]                         EPSON9.DRV
	Epson RX-100 [Epson 9 pin]                              EPSON9.DRV
	Epson RX-80/80F/T [Epson 9 pin]                         EPSON9.DRV
	Epson SQ-2500 [Epson 24 pin]                            EPSON24.DRV
	Epson T-750 [Epson 9 pin]                               EPSON9.DRV
	Epson T-1000 [Epson 9 pin]                              EPSON9.DRV
	Fujitsu DL 2400 [Fujitsu Dot Matrix]                    FUJIMTRX.DRV
	Fujitsu DL 2600 [Fujitsu Dot Matrix]                    FUJIMTRX.DRV
	Fujitsu DL 3300 [Fujitsu Dot Matrix]                    FUJIMTRX.DRV
	Fujitsu DL 3400 [Fujitsu Dot Matrix]                    FUJIMTRX.DRV
	Fujitsu DL 5600 [Fujitsu Dot Matrix]                    FUJIMTRX.DRV
	Fujitsu DX 2200 [Fujitsu Dot Matrix]                    FUJIMTRX.DRV
	Fujitsu DX 2300 [Fujitsu Dot Matrix]                    FUJIMTRX.DRV
	Fujitsu DX 2400 [Fujitsu Dot Matrix]                    FUJIMTRX.DRV
	Fujitsu DX 3100 [Fujitsu Dot Matrix]                    FUJIMTRX.DRV
	Hermes 820                                              TH760.DRV
	HP 7470A [HP Plotter]                                   HPPLOT.DRV
	HP 7475A [HP Plotter]                                   HPPLOT.DRV
	HP 7550A [HP Plotter]                                   HPPLOT.DRV
	HP 7580A [HP Plotter]                                   HPPLOT.DRV
	HP 7580B [HP Plotter]                                   HPPLOT.DRV
	HP 7585A [HP Plotter]                                   HPPLOT.DRV
	HP 7585B [HP Plotter]                                   HPPLOT.DRV
	HP 7586B [HP Plotter]                                   HPPLOT.DRV
	HP ColorPro [HP Plotter]                                HPPLOT.DRV
	HP ColorPro with GEC [HP Plotter]                       HPPLOT.DRV
	HP DeskJet Family                                       DESKJET.DRV
	HP DraftPro [HP Plotter]                                HPPLOT.DRV
	HP DraftPro DXL [HP Plotter]                            HPPLOT.DRV
	HP DraftPro EXL [HP Plotter]                            HPPLOT.DRV
	HP DraftMaster I [HP Plotter]                           HPPLOT.DRV
	HP DraftMaster II [HP Plotter]                          HPPLOT.DRV
	HP LaserJet [PCL / HP LaserJet]                         HPPCL.DRV
	HP LaserJet IID [PCL / HP LaserJet]                     HPPCL.DRV
	HP LaserJet IIP [PCL / HP LaserJet]                     HPPCL.DRV
	HP LaserJet III                                         hppcl5a.drv
	HP LaserJet Plus [PCL / HP LaserJet]                    HPPCL.DRV
	HP LaserJet 500+ [PCL / HP LaserJet]                    HPPCL.DRV
	HP LaserJet Series II [PCL / HP LaserJet]               HPPCL.DRV
	HP LaserJet 2000 [PCL / HP LaserJet]                    HPPCL.DRV
	HP PaintJet Series                                      PAINTJET.DRV
	HP ThinkJet (2225 C-D)                                  THINKJET.DRV
	IBM Color Printer                                       IBMCOLOR.DRV
	IBM Graphics                                            IBMGRX.DRV
	IBM Laser Printer 4019                                  ibm4019.drv
	IBM Personal Pageprinter [PostScript Printer]           PSCRIPT.DRV
	IBM Personal Page Printer II-030 [PostScript Printer]   PSCRIPT.DRV
	IBM Personal Page Printer II-031 [PostScript Printer]   PSCRIPT.DRV
	IBM Proprinter [IBM Proprinters]                        proprint.DRV
	IBM Proprinter II [IBM Proprinters]                     proprint.DRV
	IBM Proprinter III [IBM Proprinters]                    proprint.DRV
	IBM Proprinter X24 [IBM Proprinter 24]                  proprn24.DRV
	IBM Proprinter X24e [IBM Proprinter 24]                 proprn24.DRV
	IBM Proprinter XL [IBM Proprinters]                     proprint.DRV
	IBM Proprinter XL II [IBM Proprinters]                  proprint.DRV
	IBM Proprinter XL24 [IBM Proprinter 24]                 proprn24.DRV
	IBM Proprinter XL24e [IBM Proprinter 24]                proprn24.DRV
	IBM QuietWriter III                                     QWIII.DRV
	Kyocera F-Series [PCL / HP LaserJet]                    HPPCL.DRV
	Linotronic 100/300/500 [PostScript Printer]             PSCRIPT.DRV
	NEC Colormate PS [PostScript Printer]                   PSCRIPT.DRV
	NEC PinWriter CP6 [NEC Pinwriter]                       NEC24pin.DRV
	NEC PinWriter CP7 [NEC Pinwriter]                       NEC24pin.DRV
	NEC PinWriter P5 [NEC Pinwriter]                        NEC24pin.DRV
	NEC PinWriter P5XL [NEC Pinwriter]                      NEC24pin.DRV
	NEC PinWriter P6 [NEC Pinwriter]                        NEC24pin.DRV
	NEC PinWriter P7 [NEC Pinwriter]                        NEC24pin.DRV
	NEC PinWriter P9XL [NEC Pinwriter]                      NEC24pin.DRV
	NEC PinWriter P2200 [NEC Pinwriter]                     NEC24pin.DRV
	NEC PinWriter P5200 [NEC Pinwriter]                     NEC24pin.DRV
	NEC PinWriter P5300 [NEC Pinwriter]                     NEC24pin.DRV
	NEC Silentwriter LC 860 [PCL / HP LaserJet]             HPPCL.DRV
	NEC Silentwriter LC 860 Plus [PCL / HP LaserJet]        HPPCL.DRV
	NEC Silentwriter LC 890 [PostScript Printer]            PSCRIPT.DRV
	NEC Silentwriter LC 890XL [PostScript Printer]          PSCRIPT.DRV
	Okidata 92/93-IBM                                       IBMGRX.DRV
	Okidata ML 192 [Okidata 9 Pin]                          OKI9.DRV
	Okidata ML 193 [Okidata 9 Pin]                          OKI9.DRV
	Okidata ML 320 [Okidata 9 Pin]                          OKI9.DRV
	Okidata ML 321 [Okidata 9 Pin]                          OKI9.DRV
	Okidata ML 192-IBM [Okidata 9 Pin IBM]                  OKI9IBM.DRV
	Okidata ML 193-IBM [Okidata 9 Pin IBM]                  OKI9IBM.DRV
	Okidata ML 320-IBM [Okidata 9 Pin IBM]                  OKI9IBM.DRV
	Okidata ML 321-IBM [Okidata 9 Pin IBM]                  OKI9IBM.DRV
	Okidata 390/391 [Okidata 24 pin]                        OKI24.DRV
	Okidata 393 [Okidata 24 pin]                            OKI24.DRV
	Okidata 393C [Okidata 24 pin]                           OKI24.DRV
	Okidata LaserLine 6 [PCL / HP LaserJet]                 HPPCL.DRV
	Olivetti DM 100/1 [Olivetti DM 100...590]               OLIPRINT.DRV
	Olivetti DM 100/2 [Olivetti DM 100...590]               OLIPRINT.DRV
	Olivetti DM 100/4 [Olivetti DM 100...590]               OLIPRINT.DRV
	Olivetti DM 105 [Olivetti DM 100...590]                 OLIPRINT.DRV
	Olivetti DM 250 [Olivetti DM 250/400]                   OLIPRIN2.DRV
	Olivetti DM 280/282 [Olivetti DM 100...590]             OLIPRINT.DRV
	Olivetti DM 286/296 [Olivetti DM 100...590]             OLIPRINT.DRV
	Olivetti DM 290/292 [Olivetti DM 100...590]             OLIPRINT.DRV
	Olivetti DM 400 [Olivetti DM 250/400]                   OLIPRIN2.DRV
	Olivetti DM 580 [Olivetti DM 100...590]                 OLIPRINT.DRV
	Olivetti DM 590 [Olivetti DM 100...590]                 OLIPRINT.DRV
	Olivetti DM 600                                         DM600.DRV
	Olivetti ETV 5000 [PCL / HP LaserJet]                   HPPCL.DRV
	Olivetti PG 108 [PCL / HP LaserJet]                     HPPCL.DRV
	Olivetti PG 208 M2 [PCL / HP LaserJet]                  HPPCL.DRV
	Olivetti PG 303 [PostScript Printer]                    PSCRIPT.DRV
	Olivetti PG 308 HS [PCL / HP LaserJet]                  HPPCL.DRV
	Olivetti PG 308 HS [PostScript Printer]                 PSCRIPT.DRV
	Olivetti PR 15B/17B [Olivetti PR 15/17/19]              OLIPRINT.DRV
	Olivetti PR 19B [Olivetti PR 15/17/19]                  OLIPRINT.DRV
	Olivetti PR 24                                          OLIPRIN2.DRV
	Olivetti TH 760                                         TH760.DRV
	QMS ColorScript 100 [PostScript Printer]                PSCRIPT.DRV
	QMS-PS 800 [PostScript Printer]                         PSCRIPT.DRV
	QMS-PS 800 Plus [PostScript Printer]                    PSCRIPT.DRV
	QMS-PS 810 [PostScript Printer]                         PSCRIPT.DRV
	QuadLaser I [PCL / HP LaserJet]                         HPPCL.DRV
	Tandy LP-1000 [PCL / HP LaserJet]                       HPPCL.DRV
	Tegra Genesis [PCL / HP LaserJet]                       HPPCL.DRV
	TI 850/855                                              TI850.DRV
	TI OmniLaser 2108 [PostScript Printer]                  PSCRIPT.DRV
	TI OmniLaser 2115 [PostScript Printer]                  PSCRIPT.DRV
	Toshiba P351                                            TOSHIBA.DRV
	Toshiba P1351                                           TOSHIBA.DRV
	Toshiba PageLaser12 [PCL / HP LaserJet]                 HPPCL.DRV
	Varityper VT-600 [PostScript Printer]                   PSCRIPT.DRV
	Wang LCS15 [PostScript Printer]                         PSCRIPT.DRV
	Wang LCS15 FontPlus [PostScript Printer]                PSCRIPT.DRV
	Wang LDP8 [PCL / HP LaserJet]                           HPPCL.DRV
	
	
	Additional query words: 3.00 3.00a 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
