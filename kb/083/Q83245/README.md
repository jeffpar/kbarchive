---
layout: page
title: "Q83245: New Features in Windows 3.1"
permalink: /kb/083/Q83245/
---

## Q83245: New Features in Windows 3.1

{% raw %}

	Article: Q83245
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For Windows version 3.1, Microsoft significantly enhanced the usability of the
	Windows operating system based on extensive feedback from users of Windows
	version 3.0. Dozens of improvements will be noticeable immediately, while
	hundreds of others work behind the scenes to support new features. Microsoft
	made more than 1000 changes in Windows 3.1, changes that contribute to a
	smoother, more responsive interaction between the user and Windows.
	
	MORE INFORMATION
	================
	
	IMPROVED INSTALLATION
	---------------------
	
	The Windows version 3.1 Setup program can detect even more hardware and software
	configurations than its version 3.0 predecessor. Therefore, Windows 3.1
	configures itself optimally for the computer on which it is installed. The Setup
	program also detects a wide variety of terminate-and-stay-resident (TSR)
	programs and hardware devices known to cause problems; it then notifies you of a
	problem, or corrects the problem without your involvement.
	
	Windows 3.1 will be easier for novice users to install because of the Express
	Install feature. This is the default setup method for Windows 3.1 and requires
	minimal user input. For more advanced users, there is a Custom Installation
	option that gives you a high degree of control over the setup process, so you
	can customize the installation to fit your needs. For PC coordinators, Windows
	3.1 installation provides the Batch Install option and better network setup
	features for network installations.
	
	FILE MANAGER IMPROVEMENTS
	-------------------------
	
	The Windows 3.1 File Manager has been completely redesigned for improved
	usability and performance. You can now display the directory tree and directory
	contents side by side in a window. The File Manager now supports multiple
	"panes" for easy browsing of different drives. The File Manager also allows the
	display of more file attributes than before and can even display filenames and
	folder names in a choice of fonts.
	
	Another significant improvement is the quick format capability, which allows you
	to format floppy disks in much less time than before.
	
	The File Manager also supports an easier, more intuitive "drag-and- drop" model
	for manipulating files. For example, to print a file, you drag the file's icon
	with the mouse and "drop" the icon onto the Print Manager icon. You can also
	drop an icon on a running application or the application's title bar; the
	application will then automatically open that file. This drag-and-drop
	functionality is controlled by the new Registration Database, which stores
	information on how applications open and print files and how file types are
	associated with specific applications.
	
	PROGRAM MANAGER IMPROVEMENTS
	----------------------------
	
	Improvements to the Program Manager include "wrappable" icon titles that sit
	neatly under each icon in multiple lines, instead of a single long line that may
	overlap with other icon titles. The Program Manager also provides the new
	Startup group, which allows you to launch any group of applications
	automatically when the Windows operating system is started. Adding programs to
	the Startup group is done by simply dragging and dropping an icon.
	
	CONTEXT-SENSITIVE HELP
	----------------------
	
	The Windows 3.1 help system has also been enhanced; it now provides
	context-sensitive help information. By highlighting a command or procedure and
	pressing the F1 key, you will be greeted with help screens containing specific
	information about the command, as well as any associated information.
	
	PRINTING IMPROVEMENTS
	---------------------
	
	The Windows 3.1 Print Manager can now resume stalled print jobs without user
	intervention. For example, if a printer runs out of paper, the print job will be
	automatically resumed after the paper tray is restocked.
	
	Another printing improvement introduced with Windows 3.1 is the universal printer
	driver (UNIDRV). This software offers a single, printer-independent driver for
	which specific printer drivers can be built rapidly. The universal printer
	driver makes it easier for printer manufacturers to write or update printer
	drivers, because the driver encapsulates all the major features of a printer
	driver in a single piece of software. Vendors simply provide a table of printer-
	specific parameters for each printer. Instead of using dozens of monolithic
	printer drivers, the Windows operating system needs only a single driver and a
	small support table for each printer. Nearly 250 printers are supported in
	Windows 3.1, with the majority supported through UNIDRV.
	
	BETTER SUPPORT FOR NETWORKS
	---------------------------
	
	Microsoft has made Windows 3.1 easier to use on a computer that is attached to a
	network. Network administrators will find setup is easier with Windows 3.1,
	especially for complex system configurations. Network problems are also easier
	to trace and correct because network error messages contain more information
	regarding the type and source of the problem.
	
	Windows also maintains persistent network connections, meaning that information
	about a remote disk drive or printer is maintained by the Windows operating
	system after a network session is terminated. When Windows is restarted, it will
	reconnect automatically to the same network connections present when it was
	closed. Windows will even prompt the user for passwords if needed.
	
	APPLICATION SUPPORT: INTEGRATION
	--------------------------------
	
	Windows 3.1 provides the most sophisticated platform yet for application
	integration, making it easier for users to exchange data between documents and
	for programmers to build data-exchange capabilities into applications for
	Windows. Application integration is supported by several features of version
	3.1, as discussed below in detail.
	
	Object Linking and Embedding:
	
	An important technology for the 1990s, object linking and embedding (OLE) creates
	an environment in which applications can share information seamlessly. With OLE,
	all data can be thought of as objects. A spreadsheet chart, an illustration, a
	table, and even a paragraph of text are all examples of objects. OLE provides
	the information necessary for applications to share these objects easily.
	
	Windows 3.1 supports OLE by providing standard libraries, interfaces, and
	protocols that applications use to exchange data objects. As developers
	implement OLE capabilities within programs, you will see a new generation of
	applications that work together.
	
	Microsoft has added OLE capabilities to new versions of the Windows Write, Paint,
	and Cardfile accessories, all of which are provided with Windows 3.1. You can,
	for example, create an illustration using the Paint program and embed the
	graphic in a Write document. If the illustration must be updated, you can
	double-click its icon within the Write document, which launches Paint
	automatically so you can edit the drawing. Since the original graphics file is
	embedded in the Write document, there is no need to store or update multiple
	copies of the image, and the file can be updated on any PC with Paintbrush.
	
	Better Support for Dynamic Data Exchange:
	
	In the Windows operating system, the standard way of sharing data between
	applications is through a mechanism known as dynamic data exchange (DDE). OLE
	and other forms of data exchange use DDE as their primary means of sharing
	data.
	
	Windows 3.1 provides developers with a new Dynamic Data Exchange Manager Library
	(DDEML), which offers a higher-level programming model and makes it easier for
	developers to implement DDE capabilities in an application designed for
	Windows.
	
	Better Support for MS-DOS Applications:
	
	Windows 3.1 provides improved support for existing MS-DOS applications within the
	Windows operating system. In particular, performance of MS- DOS-based
	applications is enhanced when Windows 3.1 is used in conjunction with MS-DOS
	version 5.0, because MS-DOS 5.0 can significantly increase the amount of
	conventional memory available. In addition, Windows 3.1:
	
	- Supports MS-DOS applications running in VGA graphics mode in a window or
	  running in the background.
	
	- Allows mouse support for MS-DOS-based applications when running in a full
	  screen or in a window.
	
	- Includes more prewritten program information files (PIFs), which tell Windows
	  how to run a specific MS-DOS-based application; this results in even greater
	  MS-DOS-based application support.
	
	- Offers disk-paging, which will allow you to concurrently run more
	  applications for MS-DOS than you can under Windows 3.0.
	
	IMPROVED APPLICATION SUPPORT: TRUETYPE(TM)
	------------------------------------------
	
	Windows 3.1 includes the new TrueType scalable-font technology. TrueType provides
	outline fonts, giving you instant access to fonts in any point size, and
	allowing high-quality output on any monitor or printer supported by Windows.
	TrueType was designed and developed to meet the requirements of type
	professionals and graphic designers and offers the following benefits.
	
	Complete Integration with the Operating System:
	
	TrueType is an integrated component of Windows 3.1. For the Windows customer,
	this means there is nothing to buy or install. All the benefits of scalable-font
	technology are built into the operating system, so existing applications can
	take advantage of the benefits immediately. TrueType fonts can be used in
	Windows applications and in the system itself. For example, you can now choose
	your own fonts for File Manager. Four TrueType scalable-font families will ship
	with all copies of Windows 3.1: Arial (alternative to Helvetica), Times New
	Roman, Courier, and Symbol.
	
	Cross-Platform Compatibility:
	
	TrueType is also offered on the Apple Macintosh, and TrueType fonts can be ported
	between Windows and the Macintosh without conversion. Therefore, documents using
	TrueType fonts can be exchanged between a PC running Windows and a Macintosh
	without changes in character set, font metrics, or line endings. TrueType is
	also available in Macintosh- compatible laser printers and in TrueImage
	printers, and has been licensed to numerous printer vendors for use in future
	products.
	
	Dynamic Font Downloading:
	
	TrueType fonts are automatically converted to bitmap images or outlines,
	depending on the printer being used, and then downloaded to the printer. For
	PostScript printers, both bitmaps and outlines are used. For printers using
	Printer-Control Language (PCL), bitmap images are used. TrueType uses dynamic
	downloading, sending only the characters requested rather than the entire
	character set, resulting in faster, more efficient printing.
	
	Open Technology:
	
	To make it easy for vendors to support TrueType, Microsoft has published the
	complete specification for the TrueType font format. This specification details
	every aspect of the font format, including the outlines, metrics, font names,
	and all technical information associated with the font. Public availability of
	the TrueType font specification will make it easier and less expensive for
	vendors to support TrueType fonts with their products.
	
	SYSTEM ROBUSTNESS AND PERFORMANCE
	---------------------------------
	
	Since its shipment in May 1990, Windows version 3.0 has proven to be a remarkably
	stable product. In fact, Microsoft implemented only one update release (version
	3.0a) to accommodate minor corrections. Like any mature operating system,
	Windows works in cooperation with a vast number of hardware platforms,
	applications, and peripherals. With the countless permutations of software and
	hardware, occasional conflicts are inevitable, and approximately 1 to 2 percent
	of the calls to Microsoft Product Support Services about Windows 3.0 are
	regarding unrecoverable application errors (UAEs).
	
	Through Microsoft's communication with Windows users and developers, Microsoft
	has gained a detailed understanding of how applications generate and handle
	errors. Most UAE questions pertaining to Windows 3.0 have been resolved by
	helping users remove misbehaving TSR programs, by answering questions on drivers
	or software, by removing unnecessary lines in CONFIG.SYS files, or by installing
	later versions of the applications that are causing problems.
	
	Reducing UAEs and enhancing system robustness were primary goals for the
	designers of Windows 3.1. Microsoft's accumulated knowledge serves as the basis
	for the following design focal points:
	
	- Developing better diagnostics to pinpoint the cause of application errors
	
	- Providing tools and information to help developers write error-free
	  applications
	
	- Protecting the system from application errors
	
	- Graceful handling of application errors if they do occur (so the application
	  causing the error doesn't stop the system)
	
	The following are several examples of how these design goals are implemented in
	the Windows operating system version 3.1.
	
	Error Diagnostics and Reporting:
	
	If an application generates an error running with Windows 3.1, you will receive
	an error dialog box with specific information about the type of error that
	occurred and which application generated the error. (The Windows 3.0 dialog box
	simply says
	
	  Unrecoverable Application Error
	
	This allows problems to be traced and corrected much more quickly than before.)
	
	Additionally, Windows 3.1 ships with a diagnostic tool called Dr. Watson that
	logs information about an application error, should one occur. This logged data
	provides feedback on the error that can be used by a support technician to
	determine the solution to the error and help developers solve the application
	error.
	
	Error Recovery:
	
	Windows 3.1 includes a number of improvements designed to handle application
	errors more effectively.
	
	One of these improvements is the use of parameter validation--the same type of
	parameter validation that developers use also works in the retail version of
	Windows 3.1. This validation monitors application calls to ensure that
	applications do not violate system integrity.
	
	An errant application may still cause problems, such as stopping so that your
	computer no longer responds to input. Under version 3.1, if an application
	stops, you can press the CTRL+ALT+DEL restart key sequence, and Windows will ask
	whether the application should be continued or closed. If you choose to close
	the application, Windows will reset the environment to a stable state that will
	allow you to continue working within the Windows operating system. You no longer
	have to exit and restart Windows. This gives you better control over your
	system.
	
	The sum of all these efforts is a system with significantly enhanced reliability,
	in which application errors are far less likely to cause you to stop working and
	shut down the application or restart the system.
	
	IMPROVED PERFORMANCE
	--------------------
	
	Many performance improvements have been achieved throughout Windows 3.1. These
	include:
	
	- Faster, more responsive user shell components (notably, File Manager and
	  Program Manager).
	
	- Faster disk caching. The Windows SMARTDrive disk-caching utility has been
	  completely redesigned for Windows 3.1. It installs automatically during setup
	  and significantly boosts performance by caching read and write disk
	  operations.
	
	- Faster paging in 386 enhanced mode. Version 3.1 includes a 32-Bit-
	  Disk-Access driver that allows Windows to bypass MS-DOS and the BIOS to
	  access the Windows virtual memory paging file.
	
	- Increased display driver performance (for example, the VGA and 8514 drivers).
	
	- Better printing performance. The overall printing speed is improved; but,
	  more significantly, Windows also gives control back to the application more
	  quickly after the Print command is invoked.
	
	MULTIMEDIA
	----------
	
	Audio services and Media Control Interface (MCI) support have also been added to
	Windows 3.1. The audio application programming interfaces (APIs), which are
	identical to those found in Multimedia Extensions 1.0, specifically support
	waveform or PCM audio and Musical Instrument Digital Interface (MIDI)
	synthesized audio. Additionally, any application for Windows that supports OLE
	can take advantage of the audio capabilities in Windows 3.1 with no additional
	development required by the independent software vendor (ISV). From an
	application's perspective, audio becomes just another object type.
	
	The MCI architecture supports control of media devices such as video discs and
	videotape. Using drivers provided by third-party peripheral vendors, this
	support provides greater flexibility to the standard computing environment and
	meets another growing market need, especially in the areas of corporate
	presentations, training, and education.
	
	For those who require full multimedia support, Microsoft offers a CD- ROM version
	of Windows 3.1 with the multimedia extensions and drivers. This product includes
	Music Box, an accessory for playing CD audio disks, and HyperGuide, an online
	Help program. The addition of audio services and media control support to
	Windows 3.1 is yet another evolutionary step toward bringing multimedia
	functionality into the mainstream of desktop computing.
	
	Windows 3.1 works seamlessly with Multimedia Extensions 1.0. These extensions
	allow you to embed new objects such as audio, animation, and full-motion video
	in existing applications. The objects also allow you to create a whole new class
	of multimedia documents, such as encyclopedias enhanced with video and audio
	clips, or catalogs that display animated illustrations. The extensible
	architecture of Windows makes it possible for multimedia computing to span
	low-cost systems for home and education to sophisticated multimedia authoring
	platforms for the higher end of the market.
	
	An important enabling technology for multimedia computing is the OLE protocol
	described above. With OLE and Windows 3.1 or Multimedia Extensions 1.0, you can
	embed a multimedia object, such as an audio clip, in an existing application for
	Windows, just as you can embed a chart or text file.
	
	LAPTOP SUPPORT
	--------------
	
	Many vendors of today's popular 286- and 386-based laptop computers ship Windows
	version 3.0. Laptop users will appreciate a feature in Windows 3.1 called mouse
	trail, which makes it easier to find the cursor on a laptop display. In
	addition, Windows 3.1 supports the Advanced Power Management (APM)
	specification, which allows Windows to support the native power management of a
	laptop PC for longer battery life.
	
	CONCLUSION
	----------
	
	The Windows operating system version 3.1 is an important next step in Microsoft's
	core systems strategy--an evolutionary strategy that spans 286-based laptops to
	high-end workstations or servers. Today, Windows runs with MS-DOS, the operating
	system that spawned the PC industry and is currently in use by tens of millions
	of people. Windows also runs the thousands of existing MS-DOS and Windows-based
	applications. Extended versions of Windows--multimedia or pens, for
	example--allow you to run all these applications as well, plus unique new
	applications developed with pens or multimedia in mind.
	
	Microsoft's vision of computing in the 1990s and beyond is that computers will
	empower individuals and organizations. With its scalable implementations, the
	investments of Microsoft, and the commitment of third parties, the Windows
	operating system will be the foundation for realizing this vision.
	
	Additional query words: 3.10 drwatson
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
