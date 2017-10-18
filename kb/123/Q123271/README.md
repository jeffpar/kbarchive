---
layout: page
title: "Q123271: Chinese and Japanese Sorting"
permalink: kb/123/Q123271/
---

## Q123271: Chinese and Japanese Sorting

	Article: Q123271
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Chinese and Japanese use ideographic characters. There are at least three major
	ways to sort ideographic characters:
	
	- By strokes within radicals. Characters are sorted by radical first, then by
	  the number of strokes within the radical. Radicals themselves are sorted by
	  the number of strokes, in increasing order.
	
	- By radicals within strokes. Characters are sorted by number of strokes first,
	  then by the order of the radicals.
	
	- By pronunciation. Characters are sorted by their pronunciation (phonetic
	  order). Note that many Chinese characters have more than one pronunciation.
	
	Common Kanji dictionaries use all three sorting methods. Currently, most
	applications bypass these issues because sorting tables for Asian code pages are
	extremely large. Most often, the option is to sort by code points, which works
	reasonably well. The lstrcmp() function compares two strings by code points in
	Chinese and Japanese Windows.
	
	Japanese Windows uses SHIFT-JIS, Traditional Chinese Windows uses Big-5, and
	Simplified Chinese Windows use GB as their respective code pages.
	
	Additional query words: fesdk DBCS
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
