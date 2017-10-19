---
layout: page
title: "Q81497: Discussion of Metafiles"
permalink: /kb/081/Q81497/
---

## Q81497: Discussion of Metafiles

	Article: Q81497
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbSDKWin16
	Last Modified: 08-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the text of the article "Metafiles". This article is available
	in Windows Help file format in the Microsoft Software Library in addition to
	following sections.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Metafile.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	This article provides an overview of metafiles, their creation, and their use.
	All metafile functions are discussed:
	
	  CloseMetaFile
	  CopyMetaFile
	  CreateMetaFile
	  DeleteMetaFile
	  EnumMetaFile
	  GetMetaFile
	  GetMetaFileBits
	  PlayMetaFile
	  PlayMetaFileRecord
	  SetMetaFileBits
	
	Purpose and Design
	------------------
	
	A metafile is a mechanism for storing a graphics device interface (GDI) "picture"
	-- a series of GDI functions that are used to draw an image. A metafile consists
	of a series of records, each representing a GDI function. When the metafile is
	played back, each stored function is executed using its recorded parameters.
	
	In effect, a metafile is a journal of GDI operations, and because all GDI
	primitives can be recorded, any image that can be drawn can be stored in a
	metafile. Because a metafile is in a standard format, applications can exchange
	metafiles and use them for image storage.
	
	The mapping mode of a metafile can be altered during playback. Thus, the image
	can be scaled arbitrarily, with every component scaling separately, which
	minimizes the loss of information for the image as a whole and which is not
	characteristic of bitmaps. In addition, if the image is sparse, a metafile uses
	less memory than does a bitmap of the same image.
	
	Because of their device independence and scaling abilities, metafiles are useful
	for transferring images between applications, and most applications support the
	Clipboard format associated with metafiles (CF_METAFILEPICT). When treated as a
	single graphics primitive, a metafile is easy to paste into an application
	without that application needing to know about the specific content of the
	picture.
	
	Basic Use
	---------
	
	Creating a metafile is as simple as calling the CreateMetaFile function. An
	application can store a metafile in global memory or to disk; using a memory
	metafile is faster, but it does use up memory. The CreateMetaFile function
	returns a handle to a metafile Device Context (DC). To record into a metafile
	any function that performs an output operation or sets a drawing attribute, use
	this handle in place of a normal DC handle when calling that function.
	
	When the desired picture is stored in the metafile DC, the application calls the
	CloseMetaFile function. As its name implies, the CloseMetaFile function closes
	the metafile DC so that it can no longer be used for recording. The function
	returns a handle to a metafile.
	
	Now the metafile is ready for playback. The PlayMetaFile function is the simplest
	way to play back a metafile. It accepts a destination DC, which is where the
	image is to be drawn, and the metafile itself. In this function, GDI recalls
	every stored instruction in the metafile and executes it to the destination DC.
	The application can place the image anywhere in the destination DC and scale it
	to the desired size by altering the logical coordinate system (see the
	following).
	
	When the application is through with the metafile and before terminating, the
	application must free GDI memory used by the metafile by means of the
	DeleteMetaFile function. If the metafile is stored on disk, the file remains
	untouched; only GDI memory associated with the metafile is freed. GDI deletes
	all objects created during a metafile playback as soon the playing is complete.
	
	New Capabilities for Metafiles in Windows Version 3.0 and beyond
	----------------------------------------------------------------
	
	In Microsoft Windows 3.0, some major improvements increase the practicality of
	metafiles. The size restriction on metafiles was essentially removed, and now
	their size is limited to 2^32 bytes of information (a DWORD value for the size).
	The size of each record is no longer limited to 64K, so large bitmap operations
	can now be handled successfully. This size increase would be useless, however,
	if the number of objects were still limited by the size of GDI's heap, so the
	META_DELETEOBJECT record was added to allow object cleanup during playback.
	
	For the object deletion to work correctly when recording to a metafile, first
	deselect the object being deleted. Deleting an object that is currently selected
	into a metafiling DC will work, but no META_DELETEOBJECT record is created for
	that object. The "stranded" object is deleted when the metafile playback is
	complete, but it remains on the system throughout the playback.
	
	Using Device-Independent Bitmaps (DIBs) to store all bitmap information
	significantly improves device independence. Using the new DIB-based records, an
	application can place color bitmaps in metafiles without losing information for
	functions such as BitBlt and StretchBlt. The conversion to a DIB while
	recording, and from a DIB during playback, is automatic.
	
	The ability to use a metafile DC as the destination DC of a playback is also new;
	a metafile can now be played into another metafile. Thus, you can easily embed
	metafile information inside another metafile or copy pieces of one metafile into
	another. A word of caution: Windows version 3.0 crashes if you use PlayMetaFile
	and the destination DC is a memory-based metafile. This situation is corrected
	in Windows version 3.1, and you can use PlayMetaFileRecord for both memory-based
	and disk-based metafiles in Windows versions 3.0 and 3.1.
	
	Limitations
	-----------
	
	Some limitations in GDI APIs do not permit metafiles to be fully functional.
	Because Windows version 3.0 lacked a scaling font technology, fonts used in
	metafiles did not scale nicely as the metafile was sized. The addition of
	TrueType in Windows version 3.1 eliminates this problem. Because no curve
	primitive is defined beyond the basic Ellipse functionality, including a complex
	curve in a metafile is not possible. Although you can use the Polygon function
	to draw a curve, it will not scale smoothly. Regions do not scale at all,
	rendering them virtually useless for any sort of complex clipping within a
	metafile.
	
	Under Windows version 3.0, when an application passes a handle to a DC,
	determining whether the DC is real or a metafile is not possible. Under Windows
	version 3.1, GetDeviceCaps(hDC, TECHNOLOGY) correctly identifies a DC as a
	metafile DC (return value is DT_METAFILE) when appropriate.
	
	Unfortunately, Windows version 3.0 crashes or returns an incorrect value when
	GetDeviceCaps is used with a metafile DC.
	
	Finer Points of Object Scaling
	------------------------------
	
	A metafile that is created by an application and then passed to another
	application is likely to be scaled. Scaling may alter the desired image in a way
	not anticipated by the creating application that does not scale the image. Every
	logical measure defined in a logical object is scaled before the object is
	realized into physical form.
	
	For a logical object such as pens, the width is transformed from logical to
	physical as an x-scalar value. If the metafile is scaled in y but not in x, the
	pen width is unchanged. If the metafile is scaled in x but not in y, the pen
	width does scale. Thus, using a pen of width 1 in a metafile results in a pen
	that is wider (thick and slow) when the metafile is scaled. If a nominal width
	pen (width of 1 at all times) is desired, use 0 as the width because it is not
	affected by mapping modes. A 0-width pen is drawn as having a width of 1.
	
	Font sizing is more complicated. The two values that scale in a logical font are
	the height and the width. Most applications use a width of 0 to define a font,
	which results in a physical font with a width that was designed for the given
	height. As the metafile is stretched in x, the font remains the same size. As
	the metafile is stretched in y, however, the physical font grows bigger and
	probably wider. In and of itself, this is not a bad thing, but problems arise
	when the metafile makes assumptions about the width of the font by placing the
	characters of a text string individually by using ExtTextOut with a width array
	or using a TextOut for each character. In either case, the x-placement of each
	character scales with the metafile, but the font's width does not necessarily
	scale accordingly, which causes characters to overlap or be widely spaced.
	
	The simplest way to overcome this situation is to not place the characters
	individually but to use TextOut (or ExtTextOut with no width array) to output
	the whole string. The text string remains intact, but its size may change in
	relation to the rest of the image when x and y are not scaled identically.
	Another possibility is to define the font with a nonzero width so that it scales
	in x as well as in y. Doing so in Windows version 3.0 is not wonderful because
	its bitmapped fonts do not scale independently in x and y. Scaling a font's
	width is possible with TrueType in Windows version 3.1. Unfortunately, anytime a
	font's width is scaled, the look of the typeface changes in ways not necessarily
	intended by the designers, and a typographically "incorrect" typeface results.
	
	Pitfalls to Avoid with Metafiles
	--------------------------------
	
	GDI functions that return data either do not work properly or crash the system if
	the DC passed in is a metafile DC. This category of functions includes all Get
	functions as well as RectVisible, PtVisible, EnumFonts, EnumObjects, DPtoLP, and
	LPtoDP. Any Escape function that involves a data return is recorded in the
	metafile but returns no meaningful data. A list of all functions that are
	supported for metafiling is in the "Microsoft Windows Software Development Kit
	Reference Volume 1," on page 2-42.
	
	A number of functions in the Windows API appear to the naked eye to be GDI
	functions with a DC parameter that should be able to be recorded in a metafile;
	in reality these are functions of the window manager interface and are not
	recorded in a metafile. They are DrawFocusRect, DrawIcon, DrawText,
	ExcludeUpdateRgn, FillRect, FrameRect, GrayString, InvertRect, ScrollDC, and
	TabbedTextOut. Because a metafile DC is not actually associated with a device,
	you cannot use SetDIBits, GetDIBits, and CreateDIBitmap with a metafile DC. You
	can use SetDIBitsToDevice and StretchDIBits with a metafile DC as the
	destination. CreateCompatibleDC, CreateCompatibleBitmap, and
	CreateDiscardableBitmap are not meaningful with a metafile DC.
	
	Calling SelectObject with a metafile DC does not return the previously selected
	object in the metafile; it returns either 1 for a successful recording or 0 for
	a failed recording. Attempting to use SelectObject with a return of 1 to restore
	the previous object does not work and causes a UAE in Windows version 3.0.
	
	Support is limited for regions in metafiles. Regions do not scale properly and
	should be avoided.
	
	Metafiles that are created by an application and then passed to another
	application should avoid altering the viewport extent in order to be easily
	scalable (see below for a discussion of using mapping modes with metafiles).
	
	Metafiles Internals
	-------------------
	
	Metafiles have several layers of headers. GDI deals with the METAHEADER
	structure, which sits directly before the bits. It is described in the SDK
	reference, Volume 2, on page 9-7. The METAFILEPICT structure is associated with
	a metafile when it is placed in the Clipboard. Its basic function is to identify
	the mapping mode and drawing size of the image, which are helpful for proper
	pasting into another application.
	
	Each metafile record consists of two parts, a descriptor and the contents. Both
	are defined in the METARECORD structure:
	
	  rdSize         The size of the record in WORDs. For many records, this
	                 value is a constant because the number of parameters is
	                 not variable. The size is a DWORD value that allows
	                 records of more than 64K, a common occurrence with
	                 bitmap manipulations.
	
	  rdFunction     Identifies the function being recorded. It can be one
	                 of the META_* values defined in WINDOWS.H. That list of
	                 values also shows which GDI API functions can actually
	                 be recorded in a metafile.
	
	  rdParm[]       The space holder for the function's parameters. The
	                 size of this array varies to fit as much memory as is
	                 needed.
	
	The SDK reference, Volume 2, for Windows version 3.0 describes the ordering of
	parameters for all possible records, detailing those with nonstandard
	parameters. This description is on pages 9-7 to 9-28. Those GDI functions with a
	fixed number of parameters (that is, those that have no arrays or strings) are
	recorded as they are called, with the parameters stored in reverse order from
	the function definition. The functions with complex parameters vary in the way
	they are stored.
	
	One set of records does more than merely store parameters: the one dealing with
	the creation, selection, and deletion of objects. Instead of recording actual
	handles, which is not useful for playback, a SelectObject function generates two
	records. The first is a creation record (for example, META_CREATEPENINDIRECT).
	The second is META_SELECTOBJECT, which has a parameter that is an index into the
	object table. This object table is associated with the metafile and grows as
	objects are added. Each new object gets a new entry in the table and, hence, an
	index into the table. If an object is reselected into a metafile, the
	corresponding META_SELECTOBJECT record references the initial object table
	entry. When an application calls DeleteObject for an object that was in the
	metafile, a META_DELETEOBJECT record is added. It references the entry, and that
	entry is marked as open. The next object that is created for the metafile reuses
	that entry and its index. Object creation, selection, and deletion depend on
	proper ordering during playback to achieve the proper results. For
	PlayMetaFileRecord and the EnumMetaFile callback, this handle table becomes a
	third component of the metafile. It is used invisibly when PlayMetaFile is
	used.
	
	Using Mapping Modes with Metafiles
	----------------------------------
	
	The METAFILEPICT structure contains information about the desired size of the
	metafile. When an application pastes a metafile, it can use this information to
	control the size of the metafile output. For this to work cleanly between
	applications, be aware that:
	
	- The metafile is responsible for the window part of the mapping mode.
	
	- The player of the metafile is responsible for the viewport part of the
	  mapping mode.
	
	To perform a simple playback of the metafile, the application sets the mapping
	mode to the mode specified in the METAFILEPICT structure, sets the viewport
	origin to the desired placing of the metafile, and calls PlayMetaFile. How big
	is this output image? Because the x-extent and y-extent are given in logical
	units based on the specified mapping mode, you can use LPtoDP to calculate the
	size of the image in pixels.
	
	If the mapping mode is MM_ANISOTROPIC or MM_ISOTROPIC, sizing is not quite so
	simple. Because the x-extent and y-extent of the image are given in MM_HIMETRIC
	coordinates, first convert them to pixel values. You can use LPtoDP after
	setting the mapping mode to MM_HIMETRIC or use the HORZSIZE/HORZRES and
	VERTSIZE/VERTRES ratios (values obtained using GetDeviceCaps) to convert
	manually. Before playback, the application needs to set the viewport origin to
	the desired location, set the mapping mode to the specified mode, and set the
	viewport extents to the values calculated above. A properly created metafile
	that uses MM_ANISOTROPIC or MM_ISOTROPIC mapping modes sets the window extent at
	the start of the metafile to complete the mapping mode equation. (The viewport
	itself is not sufficient; using any of the other mapping modes sets appropriate
	values for the window extents.) If no desired extents are provided in the
	METAFILEPICT structure, the application doing the playback can arbitrarily
	choose a size.
	
	Scaling a metafile that uses MM_ANISOTROPIC or MM_ISOTROPIC is easy -- merely
	change the viewport extents to the desired size before playback. The viewport
	defines the size of the metafile image. To scale metafiles that use any other
	mapping mode, first transform the metafile to use MM_ANISOTROPIC. You don't need
	to change the metafile itself, but you do need to change the mapping mode setup
	before beginning the playback. Here is some simple code to do this:
	
	     SetMapMode(hDC, lpMetaFilePict->mm);
	     SetMapMode(hDC, MM_ANISOTROPIC);
	
	The first call sets up the viewport and window for the desired mapping mode. The
	second changes the mapping mode to be scalable but doesn't change the viewport
	and the window information. Thus, the window setting is in line with the mapping
	mode of the metafile and the logical coordinates within while leaving the
	viewport ready for scaling as desired.
	
	Manipulation during Playback
	----------------------------
	
	You don't need to blindly play back metafiles. Windows has a mechanism that
	allows an application to inspect every record before it is played, change that
	record, or even invent a record of its own. EnumMetaFile calls a callback
	routine with every record found in the metafile. The application then calls
	PlayMetaFileRecord to play an individual record. In the simplest case, the
	information passed to the callback can be sent directly to PlayMetaFileRecord to
	simulate PlayMetaFile. In more complicated scenarios, the application can change
	the colors of objects or text of a TextOut, omit certain records, or simply add
	new records to the playback.
	
	NOTE: Altering the order of object creation, selection, or deletion calls can
	adversely affect object management during playback. It is important to keep in
	mind how the object table works when manipulating object-based records.
	
	Applications that want to store private information (for retrieval during
	playback) in the metafile can do so by calling the Escape function with
	MFCOMMENT. The function to be performed does nothing on a regular DC but records
	that information in the metafile for a metafile DC. Of course, EnumMetaFile must
	be used during playback for the application to see and use it.
	
	NOTE: If the metafile is placed in the Clipboard for transferring to another
	application, the record is ignored during normal playback. To ensure that two
	commenting applications do not become confused and attempt to interpret the
	other's private data, place some kind of signature (in the form of a few
	identifier bytes at the start) in the comment.
	
	Metafile Support Functions
	--------------------------
	
	The following functions concern metafile management:
	
	  CopyMetaFile     Creates a metafile that is a copy of another
	                   metafile.
	
	  GetMetaFile      Retrieves a disk metafile, returning a handle to a
	                   metafile.
	
	  GetMetaFileBits  Returns a handle to a global memory block that
	                   contains the actual metafile internals. The
	                   application can then change, inspect or record the
	                   data.
	
	  SetMetaFileBits  Creates a memory metafile using the given metafile
	                   data.
	
	Known Problems in Windows Version 3.0
	-------------------------------------
	
	The following list identifies problems with metafiles in Windows version 3.0 that
	have been corrected in Windows version 3.1:
	
	- Attempting to record the ScaleWindowExt or ScaleViewportExt functions
	  occasionally causes crashes in Windows 3.0
	
	- Recording StretchDIBits when using BITMAPCOREHEADER causes crashes in Windows
	  3.0. To avoid this problem, convert all DIBs to the BITMAPINFO format.
	
	- Using PlayMetaFile to play into a memory-based metafile causes crashes in
	  Windows 3.0. Using disk-based metafiles or using PlayMetaFileRecord cause no
	  problems.
	
	- Using EnumMetaFile and causing GDI's heap to get shuffled (by doing extensive
	  object manipulation) sometimes results in a crash in Windows 3.0 when the
	  enumeration is complete.
	
	- Passing a NULL hDC to EnumMetaFile causes invalid handle selections in
	  Windows 3.0.
	
	- If an EnumMetaFile stops, a global selector remains allocated in Windows 3.0.
	
	- A stopped EnumMetaFile does not give the return value of the last callback in
	  Windows 3.0.
	
	- CopyMetaFile returns a nonzero value even if it fails a copy from a
	  disk-based metafile to a memory-based metafile or vice versa.
	  Memory-to-memory and disk-to-disk properly returns an error in Windows 3.0.
	
	Additional query words: softlib METAFILE.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
