---
layout: page
title: "Q66370: ListHorz/ListHscr EXEs Control Horizontal Scroll Bar List Box"
permalink: /kb/066/Q66370/
---

## Q66370: ListHorz/ListHscr EXEs Control Horizontal Scroll Bar List Box

{% raw %}

	Article: Q66370
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbSample kb16bitonly kbCtrl kbListBox kbScrollBar kbSDKPlatform kbGrpDSUser kbOS
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ListHorz.exe and ListHscr.exe demonstrate how to fully control the horizontal
	scroll bar on a list box. This information is also available in Tips.hlp, which
	is included with Microsoft Visual C/C++. ListHorz.exe and ListHscr.exe contain a
	set of horizontal scroll bar support functions that maintain the extents of all
	strings in the list box and change the scrollable list box extent as required.
	Additional details on these samples are found in the Sample Code section of this
	article.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  ListHorz.exe
	
	  ListHscr.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	ListHorz.exe contains a complete sample application demonstrating a list box with
	a horizontal scroll bar. The necessary support functions are contained in a C
	module that can be compiled and linked to any Windows-based application.
	
	ListHscr.exe contains the complete sources for a DLL that contains the necessary
	list box support functions. These functions are exactly the same as those in
	ListHorz.exe. Included in this archive is an application that uses the services
	of the DLL to perform the same functions as the application in ListHorz.exe.
	
	The following is an outline of the information presented in this article:
	
	A. Windows support for a horizontal scroll bar on a list box
	
	1. Overview Software Library sample code
	
	B. New list box messages: LB_SETHORIZONTALEXTENT and LB_GETHORIZONTALEXTENT
	
	1. Default setting for extents is zero.
	
	2. Messages only change internal value -- do not affect the visibility of the
	  scroll bar.
	
	C. Making the scroll bar visible when adding or inserting a string.
	
	1. Must change extent before adding a string.
	
	2. Must redraw the list box after adding a string.
	
	D. Hiding the scroll bar when deleting a string
	
	1. Must change the extent before deleting a string.
	
	2. Must redraw the list box after deleting a string.
	
	3. Send WM_HSCROLL message with SB_TOP parameter to scroll the list box to the
	  left in case it is scrolled right.
	
	4. Special Handling is needed for LB_RESETCONTENT.
	
	E. Calculating horizontal pixel extents of strings:
	
	1. Use GetTextExtent function.
	
	2. Font considerations: use WM_GETFONT message.
	
	3. Use GetTextMetrics and add one tmAveCharWidth.
	
	F. Maintenance of all extents in list box.
	
	G. Sample code
	
	1. Support functions as an additional C file -- static linking to application.
	
	2. Support functions in a DLL, multiple list boxes supported.
	
	Windows Support for Horizontal Scroll Bar in a List Box
	-------------------------------------------------------
	
	Microsoft Windows version 3.0 is the first version that recognizes the WS_HSCROLL
	window style for list boxes. This style adds a horizontal scroll bar to the list
	box. However, the scroll bar does not appear automatically when a string that is
	too long to display in a list box is added to that list box. Similarly, when the
	last string longer than the list box is removed, Windows will not hide the
	scroll bar. This behavior is different from that of the vertical scroll bar of a
	list box, which is added and removed as needed.
	
	An application must maintain the width, in pixels, of each string in the list
	box. The LB_SETHORIZONTALEXTENT list box message controls both the scrolling
	range and the visibility of a horizontal scroll bar. In this article, the term
	"extent" is defined to be the width of an object in screen pixels. Each string
	has an extent as does the list box itself.
	
	The other sections of this article provide more detailed information about
	special considerations that must occur when dealing with horizontal scroll bars
	in list boxes.
	
	New List Box Messages:
	
	LB_SETHORIZONTALEXTENT and LB_GETHORIZONTALEXTENT
	-------------------------------------------------
	
	Two messages have been added to Windows 3.0 to support horizontal scroll bars in
	list boxes:
	
	  Message                 Description
	  -------------------------------------------------------------------
	
	  LB_SETHORIZONTALEXTENT  Sets the width in pixels by which a list
	                          box can be scrolled to the value of wParam
	                          in the message.
	
	  LB_GETHORIZONTALEXTENT  Retrieves the width in pixels by which a
	                          list box can be scrolled.
	
	By default, the horizontal scroll bar extent of a list box is 0 (zero). Because 0
	is less than the width of the list box client area, Windows will not add a
	scroll bar to the window until the scroll bar extent is changed to a value
	larger than the list box extent.
	
	However, the LB_SETHORIZONTALEXTENT message does not affect the visibility of a
	horizontal scroll bar. If a scroll bar is visible, sending this message with a
	small extent specified will not remove it. Likewise, if a scroll bar is not
	present, sending this message with a large extent will not create one.
	
	The next two sections of this article explain how to add and remove a horizontal
	scroll bar as strings are added and deleted. The major point is that Windows
	will only show or hide the scroll bar when a string is added, inserted, or
	deleted.
	
	Making the Scroll Bar Visible When Adding or Inserting a String:
	
	When a string with an extent larger than the width of the list box is to be
	added, an application must send the LB_SETHORIZONTALEXTENT message before
	sending an LB_ADDSTRING or LB_INSERTSTRING message.
	
	During the process of adding or inserting a string, Windows compares the
	horizontal scroll bar extent stored in the list box to the width of the list box
	client area. If the client area extent is smaller than the scroll bar extent,
	the scroll bar is made visible the next time the list box is drawn.
	
	The client area width of the list box does not include the width of the vertical
	scroll bar, if it is visible. Consider a list box without a vertical scroll bar,
	that is filled with strings. Each of these strings is slightly narrower than the
	list box. When another string is added, and the vertical scroll bar is caused to
	appear, Windows discovers that the horizontal scroll bar extent is now greater
	than the width of the list box, and adds a horizontal scroll bar.
	
	If the scroll bar extent is less than the width of the client area of the list
	box, the status of the scroll bar remains unchanged.
	
	If the list box is not drawn after the string is added, the scroll bar will not
	appear. Therefore, if the WM_SETREDRAW message is used to turn redraw off,
	adding a string will not show the horizontal scroll bar until the list box is
	redrawn.
	
	Hiding the Scroll Bar When Deleting a String:
	
	Windows only removes the horizontal scroll bar during the processing of an
	LB_DELETESTRING message. Therefore, if the string to be deleted is the longest
	in the list box, the horizontal scroll bar extent must be changed to the next
	smaller extent value before that string is deleted. After the string is deleted,
	Windows compares the stored scroll bar extent to the width of the client area of
	the list box, and if the extent is smaller, the scroll bar is removed.
	
	If the list box is not drawn after the string is deleted, the scroll bar will not
	disappear. Therefore, if the WM_SETREDRAW message is used to turn redraw off,
	deleting a string will not remove the horizontal scroll bar until the list box
	is redrawn.
	
	However, if the list box is scrolled to the right by as little as one pixel, the
	scroll bar will remain visible, regardless of the extent that is set. This is
	done so that the user can always scroll back to the extreme left. If the scroll
	bar was removed, the list box might be left in a state where it is scrolled to
	the right by some amount without any way to scroll back completely to the left.
	
	To work around this problem, always scroll the list box to the extreme left
	before deleting the longest string. If a shorter string is deleted, the extent
	will remain the same and the horizontal scroll bar will not be affected anyway.
	Only scroll the list box if the longest string is being deleted.
	
	The list box can be scrolled either completely to the left (in the case where a
	long string still exists in the list box) or just enough so that the next
	longest string is visible, assuming that the list box requires a scroll bar. The
	sample code in the Software Library (described above) always scrolls the list
	box completely left, using the WM_HSCROLL message, as follows:
	
	  SendMessage(hList, WM_HSCROLL, SB_TOP, 0L);
	
	The LB_RESETCONTENT message does not affect the state of the horizontal scroll
	bar even though all strings in the list box are deleted. Before an
	LB_RESETCONTENT message is sent, an application must perform the following
	steps:
	
	1. Send a LB_SETHORIZONTALEXTENT message with an extent of 0 (zero).
	
	2. Send a WM_HSCROLL message to scroll the list box completely to the left. This
	  method is given above.
	
	3. Send an LB_DELETESTRING message with an index of 0 (zero). This will delete
	  the first string, if there is one, and will also remove the scroll bar.
	
	If any strings are present in the list box, the first is removed by the
	LB_DELETESTRING message and the scroll bar is removed, because the extent has
	been set to zero. The LB_RESETCONTENT message will then remove the remaining
	strings. If there are no strings in the list box, the LB_DELETESTRING message
	will return an error. However, because there are no strings in the list box,
	there should be no scroll bar in the first place.
	
	Calculating Horizontal Extents of Strings:
	
	The previous discussion mentions the extents of strings, but provides no methods
	for determining these values.
	
	Pixel extents of strings are calculated by the GetTextExtent function. This is a
	GDI call that sums the pixel width of each character in a string using the font
	that is currently selected into a display context represented by an hDC.
	
	If lpString holds a representative string and hWndListBox is the window handle to
	the list box, the following steps are required to determine the size of each
	string:
	
	1. Declare the following variables:
	
	        DWORD       dwExtent;
	        HDC         hDCListBox;
	        HFONT       hFontOld, hFontNew;
	        TEXTMETRICS tm;
	
	2. Use GetDC to retrieve the handle to the display context for the list box and
	  store it in hDCListBox:
	
	  hDCListBox = GetDC(hWndListBox);
	
	3. Send the list box a WM_GETFONT message to retrieve the handle to the font
	  that the list box is using, and store this handle in hFontNew:
	
	  hFontNew = SendMessage(hWndListBox, WM_GETFONT, NULL, NULL);
	
	4. Use SelectObject to select the font into the display context. Retain the
	  return value from the SelectObject call in hFontOld:
	
	  hFontOld = SelectObject(hDCListBox, hFontNew);
	
	5. Call GetTextMetrics to get additional information about the font being used:
	
	  GetTextMetrics(hDC, (LPTEXTMETRIC)&tm);
	
	6. For each string, the value of the extent to be used is calculated as follows:
	
	  dwExtent = GetTextExtent(hDCListBox, lpString, strlen(lpString))
	               + tm.tmAveCharWidth;
	
	7. After all the extents have been calculated, select the old font back into
	  hDCListBox and then release it:
	
	  SelectObject(hDCListBox, hFontOld);
	        ReleaseDC(hWndListBox, hDCListBox);
	
	There is a reason for step 5 and adding the additional width to the string in
	step 6 above. If the largest value returned by GetTextExtent is used as the
	parameter in the LB_SETHORIZONTALEXTENT message, the longest string will not
	show completely when the list box is scrolled completely to the right. A few
	pixels are clipped by the right border on the list box.
	
	The tmAveCharWidth field in the TEXTMETRIC structure provides a consistent number
	of pixels to add to the length of the string, no matter what font is presently
	in use. This buffer space keeps the strings from being clipped.
	
	As a side note, the value of tmAveCharWidth is the number of pixels by which the
	list box is scrolled horizontally when the scroll bar arrows are clicked. If a
	fixed pitch font is used, the list box is scrolled horizontally by one character
	for each click.
	
	Maintenance of All Extents in List Box:
	
	Many possible methods can be used to maintain a list of the extents of the
	strings in the list box. One of the most convenient methods is to use property
	lists, as shown in the sample code.
	
	Every window has a property list associated with it. Each property is a string
	and an associated data handle. A window stores and retrieves each data handle
	using the string that labels the handle.
	
	A sorted list of the extents for strings in the list box can be saved in a local
	or global memory object. This allows each window to keep its own list and does
	not require that the application maintain a mapping from the list box to the
	data handle itself. The list of extents should be sorted in descending order, so
	that the first extent in the list is that of the longest string in the list box.
	Keeping this list sorted also allows the application to use a binary search to
	find an extent in the list when one is being inserted or deleted.
	
	When a new string is added, insert that string's extent into the list,
	maintaining the sorted order. If the new extent is placed at the top of the
	list, send an LB_SETHORIZONTALEXTENT message to the list box specifying the new
	extent. Do not send the message for an extent that is not the largest.
	
	When a string is deleted, remove that string's extent from the list. If the
	extent is the first in the list, then that string is the longest in the list
	box. In this case, send an LB_SETHORIZONTALEXTENT to the list box specifying the
	next largest extent in the list. If a smaller string is deleted, do not send the
	message.
	
	When an LB_RESETCONTENT message is used, clear the entire list of extents. Send
	an LB_SETHORIZONTALEXTENT message specifying an extent of 0 (zero), followed by
	an LB_DELETESTRING as outlined in the last part of the section above titled
	"Hiding the Scroll Bar When Deleting a String."
	
	Sample Code:
	
	As mentioned above, there are two archives in the Microsoft Software Library:
	LISTHORZ and LISTHSCR. Each of these samples provides five support functions
	that greatly facilitate the maintenance of horizontal scroll bars in list
	boxes.
	
	In LISTHORZ, these functions are found in the file LISTHELP.C. This file can be
	compiled separately and linked into an application.
	
	LISTHSCR contains the source files for a DLL that provides these five support
	functions. The C file for the DLL is exactly the same as in LISTHORZ, except
	that its name has changed. This archive also includes a LISTHORZ program that
	uses the services of the DLL to perform the same functions as the program in the
	other archive. The file LISTHAPI.H is the include file containing prototypes of
	the functions exported by the DLL. Also included is an import library,
	LISTHSCR.LIB, that is generated by the makefile.
	
	The DLL is most useful because it can support horizontal scroll bars in any
	number of list boxes in any number of applications.
	
	The remainder of this article documents the support functions:
	
	  BOOL FInitListboxExtents(HWND hList)
	
	Allocates local memory to store a list of string extents for the list box
	identified by hList. The handle to this local memory is saved in the property
	list of the list box. This function should be called after the list box is
	created, such as during WM_INITDIALOG processing.
	
	  Parameters: hList HWND Handle to the list box that will use a horizontal
	  scroll bar. Return Value: BOOL TRUE if there are no errors, FALSE if memory
	  could not be allocated. BOOL FFreeListboxExtents(HWND hList)
	
	Frees the memory allocated for the extent list of the list box identified by
	hList. The property that stores the memory handle set by FInitListboxExtents is
	removed. This function should be called when the list box is being destroyed.
	
	  Parameters: hList HWND Handle to the list box that was previously used with
	  FInitListboxExtents Return Value: BOOL TRUE if there are no errors, FALSE if
	  memory could not be freed, in which case the property is not removed.
	
	  void ResetListboxExtents(HWND hList)
	
	Removes all previously saved extents in the extent list. This is accomplished by
	calling FFreeListboxExtents and FInitListboxExtents in succession. The
	horizontal extent of the list box is set to 0 (zero) and any horizontal scroll
	bar is removed. This function should be called before an LB_RESETCONTENT message
	is sent to the list box.
	
	  Parameters: hList HWND Handle to the list box that will be reset. Return
	  Value: none
	
	  WORD WAddExtentEntry(HWND hList, LPSTR psz)
	
	Adds an extent entry into the list box's extent list. The extent added is that of
	the string pointed to by psz using the current font in the list box. If the
	extent added is larger than any other in the extent list, an
	LB_SETHORIZONTALEXTENT message is sent to the list box with this new extent.
	
	This function must be called before the string is added to the list box with
	LB_ADDSTRING or LB_INSERTSTRING.
	
	  Parameters: hList HWND Handle to the list box to which the string is to be
	  added. psz LPSTR Pointer to string that is to be added. This function must be
	  called before the string is added so that the horizontal scroll bar will be
	  properly maintained. Return Value: WORD One of these three values: 0 if the
	  string added was not the longest string in the list box and the visibility of
	  the horizontal scroll bar did not change. The extent of the string added, if
	  the added string was the longest and the visibility of the scroll bar may
	  have changed. -1 for an error.
	
	  WORD WRemoveExtentEntry(HWND hList, WORD iSel)
	
	Removes the extent entry of the string identified by index iSel in the list box.
	If the string to be removed is the longest in the list box, the list box is
	scrolled completely to the left and the horizontal extent is set to that of the
	next longest string.
	
	This function must be called before an LB_DELETESTRING message is sent to the
	list box.
	
	  Parameters: hList HWND Handle to the list box from which a string is to be
	  removed. iSel WORD Index of the string to be removed. Return Value: WORD One
	  of these three values: 0 if the string removed was not the longest in the
	  list box and the visibility of the horizontal scroll bar did not change The
	  extent of the string deleted, if the deleted string was the longest and the
	  visibility of the scroll bar may have changed. -1 for an error.
	
	Additional query words: listbox LB_SETH LB_GETH
	
	======================================================================
	Keywords          : kbfile kbSample kb16bitonly kbCtrl kbListBox kbScrollBar kbSDKPlatform kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
